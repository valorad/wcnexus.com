from django.shortcuts import render_to_response
from django.template import RequestContext

# Create your views here.
def home(request):
	a = 3
	# return render_to_response("home/index.html", locals(), context_instance=RequestContext(request))
	return render_to_response("home/index.html")