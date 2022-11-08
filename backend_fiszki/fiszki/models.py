from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.template.defaultfilters import slugify


# Create your models here.


class UserManager(BaseUserManager):

    def create_user(self, username, email, password=None, **kwargs):
        """Create and return a `User` with an email, phone number, username and password."""
        if username is None:
            raise TypeError('Users must have a username.')
        if email is None:
            raise TypeError('Users must have an email.')

        user = self.model(username=username, email=self.normalize_email(email))
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, username, email, password):
        """
        Create and return a `User` with superuser (admin) permissions.
        """
        if password is None:
            raise TypeError('Superusers must have a password.')
        if email is None:
            raise TypeError('Superusers must have an email.')
        if username is None:
            raise TypeError('Superusers must have an username.')

        user = self.create_user(username, email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save(using=self._db)

        return user


class CustomUser(AbstractUser):
    username = models.CharField(db_index=True, max_length=255, unique=True)
    email = models.EmailField(db_index=True, unique=True, null=True, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    quiz_points = models.IntegerField(default=0)
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    objects = UserManager()

    def __str__(self):
        return f"{self.email}"


class Fishka(models.Model):
    text = models.CharField(max_length=128)
    reverse = models.CharField(max_length=1024)
    category = models.CharField(max_length=64, null=True)
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True)


class Article(models.Model):
    title = models.CharField(max_length=256)
    img = models.CharField(max_length=1024)
    section = models.CharField(max_length=256)
    author = models.CharField(max_length=256)
    slug = models.SlugField(default='/')

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)
        super(Article, self).save(*args, **kwargs)


class Quiz(models.Model):
    name = models.CharField(max_length=64)
    category = models.CharField(max_length=64)

    def __str__(self):
        return self.name


class Question(models.Model):
    question = models.CharField(max_length=1024)
    op1 = models.CharField(max_length=64)
    op2 = models.CharField(max_length=64)
    op3 = models.CharField(max_length=64)
    op4 = models.CharField(max_length=64)
    answer = models.CharField(max_length=64)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE, related_name='questionFK')

    def __str__(self):
        return self.question
