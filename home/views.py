# from django.shortcuts import render_to_response
from django.shortcuts import render
from django.template import RequestContext
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse

# Create your views here.
def home(request):
	# return render_to_response("home/index.html", locals(), context_instance=RequestContext(request))
	# return render_to_response("home/index.html")
	return render(request, "home/index.html", locals())

def log_me_in(request):
	name = request.POST.get('username')
	pswd = request.POST.get('password')
	user = authenticate(username=name, password=pswd)
	userbkinfo = {"name" : name, "status" : ""}
	if user is not None:
		login(request, user)
		userbkinfo["status"] = "success"
		# return render_to_response("home/index.html")
	else:
		userbkinfo["status"] = "failure"

	return JsonResponse(userbkinfo)

def log_me_out(request):
	logout(request)
	return JsonResponse({"status" : True})