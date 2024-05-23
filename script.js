var dynamoStories = [
    "You did super this session {name}! Your positive attitude and strength has made it so amazing to coach you! This session I saw you really improved on {compliment}. You learned so many new skills like backwards walking, bunny hops, skips and much more, but I am  most impressed with how you were never afraid to try new skills! even if you may fall. You have improved so much this session Elizabeth and I hope I can continue to help you improve in the next one!",
    "Great job this session {name}! Your determination and positive attitude throughout the session has made it a joy to coach you. This session you learned so many new skills and improved on some old ones as well. Your {improvement} are getting much better although keep practicing them. You learned many variations and did a fantastic job at {compliment}. Keep up the great work.",
    "You did super this session {name}! Your positive attitude and strength has made it so amazing to coach you! This session I saw  you really improved on {improvement} -- keep practicing! You learned so many new skills like {compliment}, but I am most impressed with how you were never afraid to try new skills! even if you may fall. You have improved so much this session {name} and I hope I can continue to help you improve in the next one.",
    "Awesome job this session {name}! You made so many new friends this session and were kind to everyone! I saw so much improvement on {compliment} this session. Your {compliment} were smooth and well-executed! For the next session keep working on your {improvement}. I know you can do it, you just need to get a bit more comfortable trying new skills. Keep up the great work.",
    "You did super this session {name}! Your kindness towards others and positive attitude made it so amazing to have you in my class! You improved so much this session, your {compliment} are very good. You do a great job at getting your entire body involved, and never have any fear when you do {compliment}! Next session keep practicing your {improvement}; a little more practice and you'll be able to do them no problem! I hope to have you in my class next session.",
    "You did amazing this session {name}! Your kindness and positive attitude made it so awesome to coach you! You improved so much this session {name}! You learned many new skills like your {compliment}! For the next session keep practicing your {improvement}. I know it's scary but you can do it! I hope to have you in my group next session!",
    "Great job this session {name}! Your positive attitude and kindness made it so fun to have you in my class. I saw a lot of improvement this session. Your {compliment} have improved so much you're able to do them effortlessly and always keep your feet glued together! Next session keep practicing your {improvement}. I hope to have you in my class next session!",
    "Great job this session {name}! Your kindness and positive attitude throughout the session has made it a joy to coach you. This session you learned so many new skills and improved on some old ones as well. Your {compliment} has improved so much, although keep practicing your {improvement}. Keep up the great work.",
    "You did so great this session {name}! You had a great coach-able attitude all session! I saw great improvement on your {compliment} as you picked it up super fast, and your confidence made your {compliment} super impressive. Next session keep practicing your {improvement}! Great work {name}!",
];

var noviceStories = [
    "Great job this session {name}! You improved so much!  I saw a lot of development on the floor, you improved on a lot of talented skills like your {compliment}, while also learning new skills. Next session continue to work on your {improvement}. {name}, your kindness this session was amazing to see. You were one of the politest athletes I have coached and were also incredibly kind to others, you always offered to help others. Overall you were amazing this session {name} and I sincerely hope to coach you again!",
    "You improved so much this session {name}. I saw the most improvements on the floor and bars. You learned many new skills and improved on old skills like your {compliment}. For the next session, keep working on your {improvement}. I saw a lot of struggle with keeping your body where it is supposed to be and remaining in control. Overall great job this session. You did an amazing session {name}. You showed lots of kindness towards others, and always gave a helping hand when needed. You also demonstrated a lot of perseverance this session. You never gave up trying on a skill that you didn't get the first time! It was so great to be able to coach you this session and I hope I can coach you again!",
    "Great work this session {name}. You improved so much this session. You really perfected your {compliment} this session {name} and I saw a great position that also translated over to your {compliment} which was just great! Next session keep working on your {improvement} on bars, I know it's tricky but with practice it will get much easier. Great work {name}! {name} you had an amazing work ethic this session. You were always on task and eager to learn new skills. not only were you eager to learn but you were always kind to others who were struggling and lent them a helping hand. Thank you for being such a great student this session brooklyn. I hope to see you in the next one!",
    "Great work {name}! I watched you improve so much this session. You are a very quick learner and by the end of the session you learned new skills that were above and beyond the expectation of your level. Like your {compliment} and much more! For the next session I want to see you keep practicing your {improvement}. {name} you were a superstar this session! You had such an amazing attitude all session and did an awesome job at taking corrections and applying them to the skills you were working on. You were also an awesome listener. Whenever I was giving instruction you would give me your full attention! Awesome job this session {name}. I really hope to coach you next session!",
    "{name} you are so strong. Your strength made learning difficult skills this session look easy. Like your {compliment} like that takes so much strength but you had no problem. That's super impressive! For the next session keep praying your {improvement}. Overall Great work {name}! You were never afraid to try new skills and even if you were you would try anyways! You persevering is super awesome and a rare quality to have. Great work {name}I hope I get lucky enough to coach you next session!",
    "It was so fun to have you in my class this session {name}. You came to class ready to learn with a positive mindset and an excitement to learn new skills. Along with having a super coach-able mindset you also demonstrated kindness to others in class, willing to help others who were confused or in the wrong place. Fantastic job {name}! Great work {name}. You made a lot of progress this session and really developed a strong foundation are your basic and complex skills like your {compliment}. For the next session I suggest putting in some extra practice of your {improvement}. Overall great work I was so impressed with your improvement this session!",
    
];

document.getElementById('generateBtn').addEventListener('click', function() {
    var name = document.getElementById('nameInput').value.trim();
    var gender = document.getElementById('genderInput').value;
    var improvement = document.getElementById('improvementInput').value.trim();
    var compliment = document.getElementById('complimentInput').value.trim();

    if (name !== '' && improvement !== '' && compliment !== '') {
        var story = generateStory(name, gender, improvement, compliment);
        document.getElementById('storyOutput').textContent = story;
    } else {
        alert('Please fill in all the fields.');
    }
});

function generateStory(name, gender, improvement, compliment) {

    var selectedStories;

    if (gender === 'dynamo')
    {
        selectedStories = dynamoStories;
    }
    else if (gender === 'novice')
    {
        selectedStories = noviceStories;
    }
    var randomIndex = Math.floor(Math.random() * selectedStories.length);
    var selectedStory = selectedStories[randomIndex];
   // var story = selectedStory.replace('{name}', name).replace('{improvement}', improvement).replace('{compliment}', compliment);
    var story = selectedStory.replace(/{name}/g, name).replace(/{improvement}/g, improvement).replace(/{compliment}/g, compliment);
    return story;
}

