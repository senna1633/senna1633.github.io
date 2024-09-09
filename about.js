// About Me Customization Script

// Example of how to easily customize the about page dynamically
const aboutMeData = {
    name: "Senna1633",
    bio: "developer with experience in building web applications. In my free time, I enjoy contributing to open source projects.",
    profilePic: "https://avatars.githubusercontent.com/u/134693605?v=4&size=64"
};

// Update the page dynamically
document.getElementById('name').innerText = aboutMeData.name;
document.getElementById('bio').innerText = aboutMeData.bio;
document.getElementById('profile-pic').src = aboutMeData.profilePic;
