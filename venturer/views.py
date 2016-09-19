from django.shortcuts import render

# Create your views here.

def venturerSelf(request):

	return render(request, "venturer/venturer.html", locals())

