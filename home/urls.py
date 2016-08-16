from django.conf.urls import url
from . import views

app_name = "home"
urlpatterns = [
	#list
	url(r'^$', views.home, name='HomePage'),
	url(r'^login/$', views.log_me_in, name='Login'),
	url(r'^logout/$', views.log_me_out, name='Logout'),
]