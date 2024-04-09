from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.get_companies, name='company-list'),
    path('companies/<int:id>/', views.get_company_by_id, name='company-detail'),
    path('companies/<int:id>/vacancies/', views.get_vacancies_by_company, name='company-vacancies'),
    path('vacancies/', views.get_vacancies, name='vacancy-list'),
    path('vacancies/<int:id>/', views.get_vacancy_by_id, name='vacancy-detail'),
    path('vacancies/top_ten/', views.get_top_ten_vacancies, name='top-ten-vacancies'),
]
