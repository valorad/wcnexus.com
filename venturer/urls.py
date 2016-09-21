from django.conf.urls import url
from . import views

app_name = "venturer"
urlpatterns = [
	#list
	url(r'^$', views.venturerSelf, name='View_Own_Profile'),
	url(r'^(?P<venturerName>[\w]+)/$', views.loadVenturer, name='View_a_Profile'),
]