from django.shortcuts import render_to_response

from events.models import *

def home(request):
    return render_to_response('index.html', {
        'events': Events.objects.all(),
    })

