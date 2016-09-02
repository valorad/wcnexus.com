# -*- coding:utf-8 -*-
# from django.shortcuts import render_to_response
from django.shortcuts import render
from django.shortcuts import get_object_or_404
# from django.template import RequestContext
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
# from django.http import HttpResponseRedirect
# from django.urls import reverse

# Databases
from .models import SiteKV


# Create your views here.



def home(request):
	# return render_to_response("home/index.html", locals(), context_instance=RequestContext(request))
	# return render_to_response("home/index.html")
	recNum = get_object_or_404(SiteKV, key="recNum").value
	return render(request, "home/index.html", locals())

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
	recNum = get_object_or_404(SiteKV, key="recNum").value
	return render(request, "home/login.html", locals())

def loginFull(request):
	userbkinfo = authnow(request)
	recNum = get_object_or_404(SiteKV, key="recNum").value
	return render(request, "home/login.html", locals())
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