import { environment } from '../environments/environment';

export let API_URL: string;
if (environment.production) {
    API_URL = window.location.protocol + '//' + window.location.hostname;
} else {
    API_URL = window.location.protocol + '//' + window.location.hostname + ':8000';
}
