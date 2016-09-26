from django.shortcuts import render
from django.contrib.auth.models import User
from django.conf import settings


from .models import *

from home.models import SiteKV
from home.views import getSiteKV
from zinnia.models.category import Category



# test area
from django.http import HttpResponse
# end test area

# Create your views here.

def loadVenturer(request, venturerName, viewCate="all"):
	venturerID = getVenturer(venturerName)
	if venturerID == -1:
		return HttpResponse("Unfortunately,  " + venturerName + " got an arrow on the knee!")
	#Continue
	venturerAvatar = getAvatar(venturerID)
	# sync name alias
	venturerNameAlias = getNameAlias(venturerID)
	# sync short bio
	venturerShortBio = getShortBio(venturerID)
	# sync categories
	venturerCategoryList = getCategoryList(venturerID)

	viewTab = viewCate
	# sync header (tab All in default)
	# blogHeader = loadBHeaderAjax(request, venturerName, viewCate).content

	mediapath = settings.MEDIA_URL

	recInfo = getSiteKV("recNum")

	recNum = recInfo["value"]
	recLink = recInfo["link"]

	return render(request, "venturer/venturer.html", locals())

def loadBHeaderAjax(request, venturerName, viewCate):
	venturerID = getVenturer(venturerName)
	if venturerID == -1:
		return HttpResponse("Unfortunately,  " + venturerName + " got an arrow on the knee!")
	venturerCall = venturerName
	cateTitle = viewCate
	if cateTitle == "All" or cateTitle == "all":
		cateImg = settings.MEDIA_URL + str(getAvatar(venturerID))
		cateDesc = "Everything about " + venturerName + " is shown here."
	else:
		cateTitleId = getTitleId(cateTitle)
		if cateTitleId == -1:
			cateDesc = "Error! this Title is invalid!"
		else:
			cateImg = settings.MEDIA_URL + "venturer/" + venturerName + "/blogCatagory/" +  vBlogCategory.objects.get(venturer=venturerID, title=cateTitleId).image
			cateDesc = vBlogCategory.objects.get(venturer=venturerID, title=cateTitleId).personalDesc
			if cateDesc is None:
				# no desc in personal database, then search for public one
				cateDesc = Category.objects.get(title=cateTitle).description
			if cateDesc is None:
				# public one still has no desc, then return "nothing found"
				cateDesc = "This is a fresh new label as no public description is given!"

	return render(request, "venturer/blogHeader.html", locals())

def loadBTagsAjax(request, venturerName):
	venturerID = getVenturer(venturerName)
	if venturerID == -1:
		return HttpResponse("Unfortunately,  " + venturerName + " got an arrow on the knee!")
	venturerCall = venturerName
	tagList = []
	tagImgList = []
	vTags = vBlogTags.objects.filter(venturer=venturerID)
	for atag in vTags:
		tagList.append(atag.tag)
		tagImgList.append(atag.image)
	listMixin = zip(tagList, tagImgList)
	return render(request, "venturer/vTags.html", locals())

# private functions
def getVenturer(venturerName):
	# check if user exists:
	vVenturer = User.objects.filter(username=venturerName)
	if vVenturer.exists():
		return User.objects.get(username=venturerName).pk
	else:
		return -1

def getAvatar(venturerId):
	from avatar.models import Avatar
	vAvatar = Avatar.objects.filter(user_id=venturerId, primary=1)
	if vAvatar.exists():
		return vAvatar.get(user_id=venturerId, primary=1).avatar
	else:
		return "ERROR_AVATAR_NOT_EXIST"

def getNameAlias(venturerId):
	return venturerDetail.objects.get(venturer=venturerId).alias

def getShortBio(venturerId):
	return venturerDetail.objects.get(venturer=venturerId).shortBio

def getCategoryList(venturerId):
	cateList = []
	cateQS = vBlogCategory.objects.filter(venturer=venturerId)
	for category in cateQS:
		cateList.append(category.title)
	return cateList

def getTitleId(TitleName):
	# check whether title exists:
	vTitle = Category.objects.filter(title=TitleName)
	if vTitle.exists():
		return Category.objects.get(title=TitleName).pk
	else:
		return -1
