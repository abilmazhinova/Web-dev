from django.http import JsonResponse, HttpResponse
from .models import Company, Vacancy
from django.core.serializers.json import DjangoJSONEncoder
import json

def get_companies(request):
    companies = Company.objects.all()
    companies_list = list(companies.values())
    return JsonResponse(companies_list, safe=False)

def get_company_by_id(request, id):
    company = Company.objects.filter(id=id).values().first()
    if company:
        return JsonResponse(company, safe=False)
    else:
        return HttpResponse(status=404)

def get_vacancies_by_company(request, id):
    company = Company.objects.filter(id=id).first()
    if company:
        vacancies = list(company.vacancies.values())
        return JsonResponse(vacancies, safe=False)
    else:
        return HttpResponse(status=404)


def get_vacancies(request):
    vacancies = Vacancy.objects.all().values()
    return JsonResponse(list(vacancies), safe=False)

def get_vacancy_by_id(request, id):
    vacancy = Vacancy.objects.filter(id=id).values().first()
    if vacancy:
        return JsonResponse(vacancy, safe=False)
    else:
        return HttpResponse(status=404)

def get_top_ten_vacancies(request):
    top_ten_vacancies = Vacancy.objects.order_by('salary')[0:10].values()
    return JsonResponse(list(top_ten_vacancies), safe=False)
