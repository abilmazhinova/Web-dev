from django.urls import path
# from . import views
from .views import *

urlpatterns = [
    path('products/', product_list,name = 'product_list'),
    path('products/<int:id>/', product_detail, name = 'product_detail'),
    path('categories/', category_list, name = 'category_list'),
    path('category/<int:id>/', category_detail, name = 'category_detail'),
    path('categories/<int:id>/products/', category_products, name = 'category_products'),
]