import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socialnetworkangular7';

  PostJson =[
    {
        "postno": 1,
        "@type": "Person",
        "profileImg": "profile.png",
        "tags": [
            "Suresh",
            "Mahesh"
        ],
        "Feeling": [
            "Haapy",
            "Sad"
        ],
        "categorie": 1,
        "name": "Ganesh Mari",
        "Ïmageurl": "../assets/images/resources/us-pic.png",
        "UpdatedON": "25-05-2019",
        "JobDescr":"Senior DotNet Developer",
        "PostText": "we need senior DotNet Developer with Angular6.0",
        "Commend": [
            {
                "Person": "friend1",
                "Commends": "BJP",
                "subcommendReplay":[{

                    "SubReplyPerson": "friend1",
                    "SubReplyCommends": "BJP"
                },{

                    "SubReplyPerson": "friend1",
                    "SubReplyCommends": "BJP"
                }]
            },
            {
                "Person": "friend2",
                "Commends": "MODI 2.0",
                "subcommendReplay":[{

                    "SubReplyPerson": "friend1",
                    "SubReplyCommends": "India modi2.0 sarkar"
                },{

                    "SubReplyPerson": "friend1",
                    "SubReplyCommends": "jaihind"
                }]
            },
            {
                "Person": "friend3",
                "Commends": "Amit shaa",
                "subcommendReplay":[{

                    "SubReplyPerson": "friend1",
                    "SubReplyCommends": "BJP"
                },{

                    "SubReplyPerson": "friend1",
                    "SubReplyCommends": "BJP"
                }]
            }
        ],
        "Likes": [
            54,
            10,
            2
        ]
    },
    {
        "postno": 2,
        "@type": "Person",
        "profileImg": "profile.png",
        "tags": [
            "Suresh",
            "Mahesh"
        ],
        "Feeling": [
            "Haapy",
            "Sad"
        ],
           "categorie": 1,
        "name": "Ganesh Mari",
        "Ïmageurl": "../assets/images/resources/us-pic.png",
        "UpdatedON": "25-05-2019",
"JobDescr":"Senior Designer",
        "PostText": "We need Senior Designer with min 5 years experience",
        "Commend": [
            {
                "Person": "friend1",
                "Commends": "DMK",
                "subcommendReplay":[{

                    "SubReplyPerson": "friend1",
                    "SubReplyCommends": "DMK thalapathy "
                },{

                    "SubReplyPerson": "friend1",
                    "SubReplyCommends": "Next CM"
                }]
            },
            {
                "Person": "friend2",
                "Commends": "NExt CM Stalin",
                "subcommendReplay":[{

                    "SubReplyPerson": "friend1",
                    "SubReplyCommends": "DMK"
                },{

                    "SubReplyPerson": "friend1",
                    "SubReplyCommends": "TamilanDAAAA"
                }]
            },
            {
                "Person": "friend3",
                "Commends": "PMK Down",
                "subcommendReplay":[{

                    "SubReplyPerson": "friend1",
                    "SubReplyCommends": "BJP Down down"
                },{

                    "SubReplyPerson": "friend1",
                    "SubReplyCommends": "ADMK Down"
                }]
            }
        ],
        "Likes": [
            54,
            10,
            2
        ]
    },{
      "postno":3,
      "@type": "Person",
      "profileImg": "profile.png",
      "tags": [
          "Suresh",
          "Mahesh"
      ],
      "Feeling": [
          "Haapy",
          "Sad"
      ],
      "categorie": 2,
      "name": "Rajkumar",
      "Ïmageurl": "../assets/images/resources/us-pic.png",
      "UpdatedON": "25-05-2019",
      "JobDescr":"Full Stack Developer",
     "PostImage":"../assets/images/jobopen.jpg",
      "Commend": [
          {
              "Person": "friend1",
              "Commends": "BJP",
              "subcommendReplay":[{

                  "SubReplyPerson": "friend1",
                  "SubReplyCommends": "BJP"
              },{

                  "SubReplyPerson": "friend1",
                  "SubReplyCommends": "BJP"
              }]
          },
          {
              "Person": "friend2",
              "Commends": "MODI 2.0",
              "subcommendReplay":[{

                  "SubReplyPerson": "friend1",
                  "SubReplyCommends": "India modi2.0 sarkar"
              },{

                  "SubReplyPerson": "friend1",
                  "SubReplyCommends": "jaihind"
              }]
          },
          {
              "Person": "friend3",
              "Commends": "Amit shaa",
              "subcommendReplay":[{

                  "SubReplyPerson": "friend1",
                  "SubReplyCommends": "BJP"
              },{

                  "SubReplyPerson": "friend1",
                  "SubReplyCommends": "BJP"
              }]
          }
      ],
      "Likes": [
          54,
          10,
          2
      ]
  },
    {
        "postno": 3,
        "@type": "Person",
        "categorie": 4,
        "profileImg": "profile.png",
        "tags": [
            "Suresh",
            "Mahesh"
        ],
        "Feeling": [
            "Haapy",
            "Sad"
        ],
        "Post type": "poll",
        "name": "Delhi Ganesh",
        "Ïmageurl": "",
        "UpdatedON": "05-05-2019",
        "PostText": "Which team will win the world cup 2019",
        "Options": [
            {
                "option": "India",
                "count":850
            },
            {
              "option": "England",
              "count":500
            },
            {
              "option": "West indies",
              "count":952
            },
            {
              "option": "Australia",
              "count":50
            }
        ],
        "Likes": [
            54,
            10,
            2
        ]
    }
  ];


}
