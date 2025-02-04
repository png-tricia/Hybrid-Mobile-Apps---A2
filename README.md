## SYST35300 Hybrid Mobile App - Assignment 2
Program: **Computer Programming @ Sheridan College** <br>
Note: The following assignment was completed during Semester 4 (2024) <br>

## The Task: 
Create a chatroom application using Ionic framework with the required features. 

## The Details: 
The following features are: 
<ul>
  <li>a tabs template, three native plugins and a service</li>
  <li>implement BehaviorSubjects to emit and subscribe to data in the app</li>
</ul>

**The Service**: 
<ol>
  <li>BehaviorSubjects for managing the sending and updating of data related to:
    <ul>
      <li>Members: Those participating in the conversation.</li>
      <li>Messages: The communication exchanged between members. </li>
    </ul>
  </li>
</ol>

**Tab1 Page**: 
<ol>
  <li>Displays a list of all members who have joined the conversation.</li>
  <li>Shows a list of all conversations.</li>
  <li>Provides functionality to join a conversation by subscribing to the BehaviorSubject in the service that manages members.</li>
  <li>Includes an input field for sending messages in the conversation.</li>
</ol>

**Tab2 Page**: 
<ol>
  <li>Displays a list of all members who have joined the conversation. </li>
  <li>Shows a list of all conversations. </li>
  <li>Provides two subscribers, each responsible for joining a conversation by subscribing to the BehaviorSubject in the service that manages members.</li>
  <li>Includes an input field for each subscriber to send messages in the conversation.</li>
</ol>

**Tab3 Page**: 
<ol>
  <li>Integrates three native plugins for additional functionality (specify the plugins and their purposes, if necessary).</li>
</ol>

## The Final Product in Action: 
![screencapture-localhost-4200-tabs-tab1-2025-02-03-20_23_26](https://github.com/user-attachments/assets/8aca0ef7-ec41-4de8-bf3f-5aea7e67c485)
![screencapture-localhost-4200-tabs-tab2-2025-02-03-20_23_33](https://github.com/user-attachments/assets/102816ac-4914-44ae-9c5e-9f3323fc00ce)
![screencapture-localhost-4200-tabs-tab3-2025-02-03-20_23_59](https://github.com/user-attachments/assets/886336a7-a46e-4e2f-a26f-fb9d82407289)

Note: Native Plugins won't be seen working due to Android Studio not running in the background. 

## Thoughts/Comments: 
Favourite assignment out of the 4. Would fix the aesthetics but I am glad that its functioning the way it should. Main takeaways - Observables, UI Components, Ionic Natives 
