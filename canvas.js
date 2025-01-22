const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext('2d');
canvas.height = 10;
canvas.width = Math.round(canvas.height * window.innerWidth / window.innerHeight);
alert("ASSUME THAT CHANGING COLORS IN F3X TAKES TIME!\n\nIF THAT IS THE CASE THEN THIS WOULD BE A FASTER AND MORE EFFICIENT WAY TO DO SCREENSHARE MACRO/EXPLOIT");
var fps = prompt("TYPE THE FPS YOU WANT TO SEE THE ALGORITHM SHOWCASE AT!");

var colors = () => {
    let o = Math.round(Math.random() * 3)
    if(o == 3) {
        return "blue";
    } else if(o == 2) {
        return "red";
    } else if(o == 1) {
        return "yellow";
    } else {
        return "white";
    }
}

var x = 0;
var y = 0;
var frame = []
for(let i = 0; i < canvas.height; i++) {
    frame[i] = []
    for(let j = 0; j < canvas.width; j++) {
        frame[i][j] = colors();
    }
}
var current = frame[0][0];
setInterval(() => {
    if(y >= canvas.height) {
        x = 0;
        y = 0;
        current = " ";
        while(frame[y][x] == current) {
            x++;
            if(x > canvas.width) {
                x = 0;
                y++;
            }
            if(y >= canvas.height) {
                break;
            }
        }
        return 0;
    }

    if(current == " " && (frame[y][x] != " " && frame[y][x] !== undefined)) {
        current = frame[y][x];
    }

    if(frame[y][x] != " " && frame[y][x] == current) {
        ctx.fillStyle = current;
        ctx.fillRect(x,y,1,1);
        console.log("X"+x+"Y"+y+"\nCURRENT COLOR: " + current);
        frame[y][x] = " ";
        while(frame[y][x] != current) {
            x++;
            if(x > canvas.width) {
                x = 0;
                y++;
            }
            if(y >= canvas.height) {
                break;
            }
        }
    } else {
        x++;
        if(x > canvas.width) {
            x = 0;
            y++;
        }
    }
},1000 / fps)
