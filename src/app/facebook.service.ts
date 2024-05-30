import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {
  private pageAccessToken = 'YOUR_PAGE_ACCESS_TOKEN'; // Replace with your Page Access Token

  constructor(private http: HttpClient) {}

  setPersistentMenu(): Observable<any> {
    const persistentMenu = {
      persistent_menu: [
        {
          locale: 'default',
          composer_input_disabled: false,
          call_to_actions: [
            {
              type: 'postback',
              title: 'Talk to an agent',
              payload: 'CARE_HELP'
            },
            {
              type: 'postback',
              title: 'Outfit suggestions',
              payload: 'CURATION'
            },
            {
              type: 'web_url',
              title: 'Shop now',
              url: 'https://www.originalcoastclothing.com/',
              webview_height_ratio: 'full'
            }
          ]
        }
      ]
    };

    return this.http.post(`https://graph.facebook.com/v12.0/me/messenger_profile?access_token=${this.pageAccessToken}`, persistentMenu);
  }

  whitelistDomains(): Observable<any> {
    const url = `https://graph.facebook.com/v20.0/me/messenger_profile?access_token=${this.pageAccessToken}`;
    const body = {
      whitelisted_domains: [
        "https://petersfancyapparel.com"
      ]
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, body, { headers });
  }
}
