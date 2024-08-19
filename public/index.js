/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

// import inquirer from 'inquirer';
// import qr from 'qr-image';
// import { writeFile,createWriteStream } from 'fs';


<script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>
  
    function generateQRCode() {
      const url = document.getElementById('urlInput').value;
      
      if (!url) {
        alert('Please enter a valid URL');
        return;
      }
      
      // Show loader
      document.getElementById('loader').style.display = 'block';

      // Clear any existing QR codes
      document.getElementById('qrcode').innerHTML = '';

      // Simulate a delay to mimic loading time (optional)
      setTimeout(() => {
        // Generate the QR code after a delay (simulate network or processing time)
        new QRCode(document.getElementById('qrcode'), {
          text: url,
          width: 200,
          height: 200
        });
        
        // Hide the loader once the QR code is generated
        document.getElementById('loader').style.display = 'none';

        // Optionally, save the URL to localStorage (simulating a backend file)
        localStorage.setItem('savedURL', url);
        console.log('URL saved: ' + url);
      }, 2000); // 2 seconds delay to show the loader for demo purposes
    }
  
// Generate the QR code as an SVG file and save it to the filesystem
// inquirer
//   .prompt([
//     {
//       type: 'input',
//       name: 'URL',
//       message: 'Enter any URL!',
//     }
//   ])
//   .then((answers) => {
//     const url = answers.URL;
//     console.log(`Your URL is: ${url}`);
//     // Generate the QR code and save it as a PNG file
//     const qr_png = qr.image(url, { type: 'png' });
//     qr_png.pipe(createWriteStream('qr_code.png'));
//     console.log('QR code generated and saved as i_love_qr.png');

//     writeFile('URL.txt',url,(err)=>{
//       if (err) throw err;
//       console.log('URL saved to URL.txt');
//     });


//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       console.log("Prompt couldn't be rendered in the current environment");
//     } else {
//       console.error("Something went wrong:", error);
//     }
//   });


// Alternatively, generate the QR code as a string (e.g., for inline SVG use)
// const svg_string = qr.imageSync('I love QR!', { type: 'png' });

