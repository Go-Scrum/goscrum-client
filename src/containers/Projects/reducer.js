import {
    GET_PROJECTS,
    TOGGLE_LOADER,
    RESET_STATE,
} from './constants';

const initialData = {
    isFetching: false,
    projects: [
        {
            "id": "7e9f1ebc-b787-4f32-837c-557b01fafd92",
            "created_at": "2020-02-23T13:50:57.8600566Z",
            "name": "Standup",
            "workspace_id": "c27c2826-6223-4d56-b8b2-1d919660a526",
            "channel_name": "test",
            "channel_id": "c4h99n7547fg5gypkwun16gmgw",
            "deadline": "",
            "tz": "tz",
            "onbording_message": "Welcome to GoScrum",
            "submission_days": "submission_days_updated 3",
            "Participants": [
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Mehul",
                    "last_name": "Thakkar",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Durga",
                    "last_name": "Prasad",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Mehul",
                    "last_name": "Thakkar",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Durga",
                    "last_name": "Prasad",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "",
                    "last_name": "",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Durga",
                    "last_name": "Prasad",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                }
            ],
            "reporting_channel": "",
            "reporting_time": "",
            "is_active": false,
            "Questions": [
                {
                    "id": "4f0453d7-9e1d-4fd1-bb4c-0f1624d483ac",
                    "created_at": "2020-02-23T15:40:48.1409641Z",
                    "Title": "How do you feel today ??",
                    "Type": 0,
                    "ProjectId": ""
                },
                {
                    "id": "9e2e7ace-266c-42fb-b6b4-3aceba42059f",
                    "created_at": "2020-02-23T15:40:48.1501058Z",
                    "Title": "Next task please ???",
                    "Type": 0,
                    "ProjectId": ""
                }
            ]
        },
        {
            "id": "7e9f1ebc-b787-4f32-837c-557b01fafd92",
            "created_at": "2020-02-23T13:50:57.8600566Z",
            "name": "Standup",
            "workspace_id": "c27c2826-6223-4d56-b8b2-1d919660a526",
            "channel_name": "test",
            "channel_id": "c4h99n7547fg5gypkwun16gmgw",
            "deadline": "",
            "tz": "tz",
            "onbording_message": "Welcome to GoScrum",
            "submission_days": "submission_days_updated 3",
            "Participants": [
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "",
                    "last_name": "",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                }
            ],
            "reporting_channel": "",
            "reporting_time": "",
            "is_active": false,
            "Questions": [
                {
                    "id": "4f0453d7-9e1d-4fd1-bb4c-0f1624d483ac",
                    "created_at": "2020-02-23T15:40:48.1409641Z",
                    "Title": "How do you feel today ??",
                    "Type": 0,
                    "ProjectId": ""
                },
                {
                    "id": "9e2e7ace-266c-42fb-b6b4-3aceba42059f",
                    "created_at": "2020-02-23T15:40:48.1501058Z",
                    "Title": "Next task please ???",
                    "Type": 0,
                    "ProjectId": ""
                }
            ]
        },
        {
            "id": "7e9f1ebc-b787-4f32-837c-557b01fafd92",
            "created_at": "2020-02-23T13:50:57.8600566Z",
            "name": "Standup",
            "workspace_id": "c27c2826-6223-4d56-b8b2-1d919660a526",
            "channel_name": "test",
            "channel_id": "c4h99n7547fg5gypkwun16gmgw",
            "deadline": "",
            "tz": "tz",
            "onbording_message": "Welcome to GoScrum",
            "submission_days": "submission_days_updated 3",
            "Participants": [
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "",
                    "last_name": "",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                }
            ],
            "reporting_channel": "",
            "reporting_time": "",
            "is_active": false,
            "Questions": [
                {
                    "id": "4f0453d7-9e1d-4fd1-bb4c-0f1624d483ac",
                    "created_at": "2020-02-23T15:40:48.1409641Z",
                    "Title": "How do you feel today ??",
                    "Type": 0,
                    "ProjectId": ""
                },
                {
                    "id": "9e2e7ace-266c-42fb-b6b4-3aceba42059f",
                    "created_at": "2020-02-23T15:40:48.1501058Z",
                    "Title": "Next task please ???",
                    "Type": 0,
                    "ProjectId": ""
                }
            ]
        },
        {
            "id": "7e9f1ebc-b787-4f32-837c-557b01fafd92",
            "created_at": "2020-02-23T13:50:57.8600566Z",
            "name": "Standup",
            "workspace_id": "c27c2826-6223-4d56-b8b2-1d919660a526",
            "channel_name": "test",
            "channel_id": "c4h99n7547fg5gypkwun16gmgw",
            "deadline": "",
            "tz": "tz",
            "onbording_message": "Welcome to GoScrum",
            "submission_days": "submission_days_updated 3",
            "Participants": [
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Mehul",
                    "last_name": "Thakkar",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Durga",
                    "last_name": "Prasad",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Mehul",
                    "last_name": "Thakkar",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Durga",
                    "last_name": "Prasad",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "",
                    "last_name": "",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Durga",
                    "last_name": "Prasad",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                }
            ],
            "reporting_channel": "",
            "reporting_time": "",
            "is_active": false,
            "Questions": [
                {
                    "id": "4f0453d7-9e1d-4fd1-bb4c-0f1624d483ac",
                    "created_at": "2020-02-23T15:40:48.1409641Z",
                    "Title": "How do you feel today ??",
                    "Type": 0,
                    "ProjectId": ""
                },
                {
                    "id": "9e2e7ace-266c-42fb-b6b4-3aceba42059f",
                    "created_at": "2020-02-23T15:40:48.1501058Z",
                    "Title": "Next task please ???",
                    "Type": 0,
                    "ProjectId": ""
                }
            ]
        },
        {
            "id": "7e9f1ebc-b787-4f32-837c-557b01fafd92",
            "created_at": "2020-02-23T13:50:57.8600566Z",
            "name": "Standup",
            "workspace_id": "c27c2826-6223-4d56-b8b2-1d919660a526",
            "channel_name": "test",
            "channel_id": "c4h99n7547fg5gypkwun16gmgw",
            "deadline": "",
            "tz": "tz",
            "onbording_message": "Welcome to GoScrum",
            "submission_days": "submission_days_updated 3",
            "Participants": [
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Mehul",
                    "last_name": "Thakkar",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Durga",
                    "last_name": "Prasad",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Mehul",
                    "last_name": "Thakkar",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Durga",
                    "last_name": "Prasad",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "",
                    "last_name": "",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Durga",
                    "last_name": "Prasad",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                }
            ],
            "reporting_channel": "",
            "reporting_time": "",
            "is_active": false,
            "Questions": [
                {
                    "id": "4f0453d7-9e1d-4fd1-bb4c-0f1624d483ac",
                    "created_at": "2020-02-23T15:40:48.1409641Z",
                    "Title": "How do you feel today ??",
                    "Type": 0,
                    "ProjectId": ""
                },
                {
                    "id": "9e2e7ace-266c-42fb-b6b4-3aceba42059f",
                    "created_at": "2020-02-23T15:40:48.1501058Z",
                    "Title": "Next task please ???",
                    "Type": 0,
                    "ProjectId": ""
                }
            ]
        },
        {
            "id": "7e9f1ebc-b787-4f32-837c-557b01fafd92",
            "created_at": "2020-02-23T13:50:57.8600566Z",
            "name": "Standup",
            "workspace_id": "c27c2826-6223-4d56-b8b2-1d919660a526",
            "channel_name": "test",
            "channel_id": "c4h99n7547fg5gypkwun16gmgw",
            "deadline": "",
            "tz": "tz",
            "onbording_message": "Welcome to GoScrum",
            "submission_days": "submission_days_updated 3",
            "Participants": [
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Mehul",
                    "last_name": "Thakkar",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Durga",
                    "last_name": "Prasad",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Mehul",
                    "last_name": "Thakkar",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Durga",
                    "last_name": "Prasad",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "",
                    "last_name": "",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                },
                {
                    "id": "ae154643-9275-4f78-98ee-47959c577ff1",
                    "created_at": "2020-02-23T13:50:58Z",
                    "workspace_id": "f6627f99-5968-4d55-9b08-51b757eea9e5",
                    "user_id": "ckx5cdxzptrkjqipddgx7ei56w",
                    "role": "system_admin system_user",
                    "real_name": "durgaprasad",
                    "first_name": "Durga",
                    "last_name": "Prasad",
                    "nick_name": "",
                    "channel_name": "durgaprasad.budhwani@gmail.com",
                    "Projects": null
                }
            ],
            "reporting_channel": "",
            "reporting_time": "",
            "is_active": false,
            "Questions": [
                {
                    "id": "4f0453d7-9e1d-4fd1-bb4c-0f1624d483ac",
                    "created_at": "2020-02-23T15:40:48.1409641Z",
                    "Title": "How do you feel today ??",
                    "Type": 0,
                    "ProjectId": ""
                },
                {
                    "id": "9e2e7ace-266c-42fb-b6b4-3aceba42059f",
                    "created_at": "2020-02-23T15:40:48.1501058Z",
                    "Title": "Next task please ???",
                    "Type": 0,
                    "ProjectId": ""
                }
            ]
        }
    ],
};

export default function projectsReducer(state = initialData, { payload, ...action } = {}) {
    switch (action.type) {
        case TOGGLE_LOADER:
            return {
                ...state,
                isFetching: !!payload,
            };
        case RESET_STATE:
            return {
                ...state,
                ...initialData,
            };
        case GET_PROJECTS.request:
            return {
                ...state,
                isFetching: true,
            };
        case GET_PROJECTS.success:
            return {
                ...state,
                isFetching: false,
                projects: payload,
            };
        case GET_PROJECTS.failure:
            return {
                ...state,
                isFetching: false,
            };
        default:
            return state;
    }
}
