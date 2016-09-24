from django.shortcuts import render
from django.contrib.auth.models import User
from django.conf import settings

from .models import *
from zinnia.models.category import Category

# test area
from django.http import HttpResponse
# end test area

# Create your views here.

def venturerSelf(request):
	return render(request, "venturer/venturer.html", locals())

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
		cateImg = settings.MEDIA_URL + "venturer/" + venturerName + "/blogCatagory/" +  vBlogCategory.objects.get(venturer=venturerID, title=cateTitle).image 
		cateDesc = Category.objects.get(title=cateTitle).description

	return render(request, "venturer/blogHeader.html", locals())


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
