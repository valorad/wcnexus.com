# wcNexus

wcnexus.com v1 is closed open beta and entered maintenance stage.

wcNexus is a nexus of wc worlds. (wc's personal website)

v1 is powered by [Python](https://github.com/python) as well as [Django](https://github.com/django/django)

## Plus special thanks to the opensource projects:
<table>
  <thead>
    <tr>
      <td>Project name</td>      <td>Author</td>      <td>Description</td>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td><a href="https://github.com/django/django" target="_blank">Django</a></td>
        <td><a href="https://github.com/django" target="_blank">Django</a></td>
        <td>Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.</td>
      </tr>
      <tr>
        <td><a href="https://github.com/jquery/jquery" target="_blank">jQuery</a></td>
        <td><a href="https://github.com/jquery">jQuery Foundation</a></td>
        <td>JavaScript Library</td>
      </tr>
      <tr>
        <td><a href="https://github.com/twbs/bootstrap" target="_blank">Bootstrap</a></td>
        <td><a href="https://github.com/twbs" target="_blank">Bootstrap</a></td>
        <td>Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development</td>
      </tr>
      <tr>
        <td><a href="https://github.com/FezVrasta/bootstrap-material-design" target="_blank">bootstrap-material-design</a></td>
        <td><a href="https://github.com/FezVrasta" target="_blank">FezVrasta</a></td>
        <td>Material design theme for Bootstrap 3 and 4</td>
      </tr>
      <tr>
        <td><a href="https://github.com/Fantomas42/django-blog-zinnia" target="_blank">django-blog-zinnia</a></td>
        <td><a href="https://github.com/Fantomas42" target="_blank">Fantomas42</a></td>
        <td>Simple yet powerful and really extendable application for managing a blog within your Django Web site.</td>
      </tr>
      <tr>
        <td><a href="https://github.com/grantmcconnaughey/django-avatar" target="_blank">django-avatar</a></td>
        <td><a href="https://github.com/grantmcconnaughey" target="_blank">grantmcconnaughey</a></td>
        <td>A Django app for handling user avatars.</td>
      </tr>
      <tr>
        <td><a href="https://github.com/desandro/masonry" target="_blank">masonry</a></td>
        <td><a href="https://github.com/desandro" target="_blank">desandro</a></td>
        <td>Cascading grid layout library</td>
      </tr>
  </tbody>
</table>

## Django compability
- 1.11 
- 1.10 
- 1.9 
- <=1.8 not tested

## Deployment

1. (Skip this if you use default SQLite database) Create a database (eg. wcnexus)

2. Install dependencies:

    - Ubuntu/Debian:
      - `sudo apt-get install python3-dev libjpeg8-dev`
      - `pip install pillow django django-avatar`

3. Start a django project (eg. wcNexus)

    `django-admin startproject "(your desired path)/wcNexus"`

4. follow the guide to install [django-blog-zinnia](https://github.com/Fantomas42/django-blog-zinnia)

5. In settings.py, you must at least set:

    `INSTALLED_APPS = [...,'mptt','tagging','zinnia','django_comments','avatar','home','venturer',]`

    - Be cautious that 'django_comments' must be put after 'zinnia'. You may refer to [Fantomas42/django-blog-zinnia#484](https://github.com/Fantomas42/django-blog-zinnia/issues/484) for more details.

    `TEMPLATES = [{...'DIRS': [os.path.join(BASE_DIR,'templates')],...},]`

    `(Skip this if you use default SQLite database) DATABASES.`

    - You may refer to [Django Ref doc](https://docs.djangoproject.com/en/1.11/ref/databases/) for more info about database configurations.

    `MEDIA_URL` (eg. `/media/`)
    
    `MEDIA_ROOT` (eg. `/media/`)
    
    `STATIC_ROOT` (eg. `/static/`)
    
    `LOGIN_URL` (eg. `/static/`)

6. In site urls.py, you may configure similar to follows:

        from django.conf.urls import include, url
        from django.contrib import admin

        urlpatterns = [
            url(r'^admin/', admin.site.urls),
            url(r'^', include('home.urls')),
            url(r'^weblog/', include('zinnia.urls')),
            url(r'^comments/', include('django_comments.urls')),
            url(r'^i18n/', include('django.conf.urls.i18n')),
        ]

7. Clone this repo and move above folders to this repo.  No need to worry redundancies as .gitignore file is already configured.

8. In your terminal, switch to the root directory, and run

    `python3 manage.py makemigrations`

    `python3 manage.py migrate`

9. Collect static files by running

    `python3 manage.py collectstatic`

10. Create a super user

    `python3 manage.py createsuperuser`

11. Run server

    `python3 manage.py runserver --insecure`

12. Navigate to admin site at [127.0.0.1:8000/admin](http://127.0.0.1:8000/admin) (Usually port 8000 unless you have otherwise specified.), log yourself in, and add an entry to table Site_KV. 

        Key: recNum,
        Value: "(天朝特色备案号)",
        Link: "(工信部大网站链接)"

13. Visit your site. Usually at [127.0.0.1:8000](http://127.0.0.1:8000), and enjoy!
