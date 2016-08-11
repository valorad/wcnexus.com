from django.conf.urls import url
from . import views

app_name = "home"
urlpatterns = [
	#list
	url(r'^$', views.home, name='HomePage')
]