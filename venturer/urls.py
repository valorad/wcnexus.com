from django.conf.urls import url
from . import views

app_name = "venturer"
urlpatterns = [
	#list
	url(r'^$', views.venturerSelf, name='View_Own_Profile'),

]