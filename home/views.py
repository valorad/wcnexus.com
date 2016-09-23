# -*- coding:utf-8 -*-
# from django.shortcuts import render_to_response
from django.shortcuts import render
from django.shortcuts import get_object_or_404
# from django.template import RequestContext
from django.conf import settings
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
# from django.http import HttpResponseRedirect
# from django.urls import reverse

# Databases
from .models import SiteKV, SiteHot


# Create your views here.

try:
	recNum = get_object_or_404(SiteKV, key="recNum").value
	recLink = get_object_or_404(SiteKV, key="recNum").link
except Exception as e:
	print("unable to retrieve a SiteKV now")
else:
	pass
finally:
	pass



def home(request):
	hotSites = SiteHot.objects.all()
	hlength = SiteHot.objects.count()
	for site in hotSites:
		site.img = settings.MEDIA_URL + "home/sitehot/" + site.img
	return render(request, "home/index.html", {"recNum" : recNum, "recLink" : recLink, "hotSites" : hotSites, "hlength" : hlength})

def authnow(WaideRequest):
	name = WaideRequest.POST.get('username')
	pswd = WaideRequest.POST.get('password')
	user = authenticate(username=name, password=pswd)
	userbkinfo = {"name" : name, "status" : ""}
	if user is not None:
		login(WaideRequest, user)
		userbkinfo["status"] = "success"
		# return render_to_response("home/index.html")
	else:
		userbkinfo["status"] = "failure"
	return userbkinfo;

def log_me_in(request):
	userbkinfo = authnow(request)
	return JsonResponse(userbkinfo)

@login_required
def log_me_out(request):
	logout(request)
	return JsonResponse({"status" : True})

def log_Page(request):
	return render(request, "home/login.html", {"recNum" : recNum, "recLink" : recLink})

def loginFull(request):
	userbkinfo = authnow(request)
	return render(request, "home/login.html", {"userbkinfo" : userbkinfo, "recNum" : recNum, "recLink" : recLink})
	# return HttpResponseRedirect(reverse('home:login_Form', args=(userbkinfo,)))

@login_required
def loadAjaxAvatar(request):
	return render(request, "home/loadAjaxAvatar.html", locals())

# def get_language_info_list(request)
# 	from django.conf import settings
# 	LANGUAGES = settings.LANGUAGES
# 	return render(request, "home/index.html", locals())

# @login_required
# def pertest(request):
# 	return JsonResponse({"apple" : "iphone 6S plus 土豪金限量抢购大狂欢只要998电视砸烂抱回家"})