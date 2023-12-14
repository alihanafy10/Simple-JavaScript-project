let demo = document.getElementById("content");
let btn = document.getElementById("input");
let i = document.querySelector("i");
let arr = [
  { src: "video/mylivewallpapers.com-Itachi-Blaze.mp4", alt: "itachi", name: "Itachi Uchiha", desc: "He is Sasuke's older brother and the one who killed all the Uchiha family members except for his younger brother Sasuke." },
  { src: "video/mylivewallpapers.com-Obito-White-Mask.mp4", alt: "obito", name: "Obito Uchiha", desc: `Obito is considered one of the mysterious and complex characters in "Naruto". The narrative develops around his character and his transformation into the character known as "Toby", who plays an important role in the main events of the series.` },
  { src: "video/mylivewallpapers.com-Naruto-Fireball.mp4", alt: "naruto", name: "Naruto", desc: `Naruto Uzumaki, a young man who dreams of becoming Hokage (the leader of the village), but he carries in his body the power of the fox known as the "Kyuubi", a huge monster that has been sealed inside him.` },
  { src: "video/mylivewallpapers.com-Chibaku-Tensei-Naruto-Shippuden.mp4", alt: "Pain", name: "Pain", desc: `Nagato, or Pain, follows a philosophy of his own, and he believes that peace can be achieved by imposing force and terror. He has powerful and unique ninja abilities, and he has the ability to control six different bodies` },
  { src: "video/mylivewallpapers.com-Hatake-Kakashi-Lightning-Blade.mp4", alt: "Kakashi", name: "Kakashi", desc: `Kakashi, who is called a copy ninja, can copy any ninja technique and has more than a thousand ninja techniques. He is the teacher of Naruto and Sasuke.` },
  { src: "video/mylivewallpapers.com-Sasuke-Uchiha-Lightning-Naruto-Shippuden.mp4", alt: "sasuke ", name: "Sasuke Uchiha", desc: `Itachi's younger brother is the only survivor of his clan's massacre at the hands of his brother, and he follows his brother's saying that if you want to kill me, you must derive your strength from hatred in order to be able to kill me.` },
  { src: "video/mylivewallpapers.com-Madara-Uchiha-Susanoo-1.mp4", alt: "madara", name: "Madara", desc: `Madara Uchiha is a complex and powerful character, and his history and influence make him one of the most prominent and interesting characters in the "Naruto" series.` }
];
let copy = [];
i.innerHTML = "";
    let rand = Math.round(Math.random() * (arr.length - 1));
if (copy.length == 0 || !copy.includes(arr[rand])) {
  console.log(rand);
  demo.innerHTML = `
       <h1>${arr[rand].name}</h1>
      <video src="${arr[rand].src}" autoplay loop></video>
       <div><p id="po"></p></div>
       `;
  copy.push(arr[rand]);
  let text = arr[rand].desc;
  function typeWriter() {
    if (i.textContent.length < text.length) {
      i.textContent += text.charAt(i.textContent.length);
      setTimeout(typeWriter, 50);
    }
  }
  let i = document.getElementById("po");
  typeWriter();
}

btn.onclick = function () {
  while (1) {
    i.innerHTML = "";
    let rand = Math.round(Math.random() * (arr.length - 1));
    if (copy.length == 0 || !copy.includes(arr[rand])) {
      console.log(rand);
      demo.innerHTML = `
       <h1>${arr[rand].name}</h1>
      <video src="${arr[rand].src}" autoplay loop></video>
       <div><p id="po"></p></div>
       `;
      copy.push(arr[rand]);
       let text = arr[rand].desc;
      function typeWriter() {
  if (i.textContent.length < text.length) {
    i.textContent += text.charAt(i.textContent.length);
    setTimeout(typeWriter, 50);
  }
      }
      let i = document.getElementById("po");
      typeWriter();
    break
  }
  }
  if (copy.length == arr.length) {
    copy = [];
  }
}

