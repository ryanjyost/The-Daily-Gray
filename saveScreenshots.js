// var webshot = require("webshot");
// var fs = require("fs");
// var cloudinary = require("cloudinary");
// var Screenshot = require("./models/screenshot.js");
// const async = require("async");

// cloudinary.config({
//   cloud_name: "ryanjyost",
//   api_key: "737735696923524",
//   api_secret: "-jRo4mZuCiGDIMMQq2ghIr2rDn4"
// });

// module.exports = function saveImages(sites) {
//   console.log("====== START SAVING.... ======");
//   const options = {
//     screenSize: { width: 1024, height: 768 },
//     shotSize: { width: "screen", height: "all" }
//   };

//   sites.forEach(site => {
//     // readable stream
//     var webshotStream = webshot(site.url);

//     // writeable stream
//     var cloudinaryStream = cloudinary.v2.uploader.upload_stream(
//       { public_id: `${site.name}/${site.name}\_${Date.now()}` },
//       (err, result) => {
//         if (err) {
//           console.log(`-------------------------------`);
//           console.log(`XXXX ${site.name} - error!`);
//           console.log(err);
//           console.log(`-------------------------------`);
//           return;
//         }
//         console.log(`+ ${site.name}`);
//         // console.log(result);

//         Screenshot.create(
//           {
//             site: site.name,
//             uploaded_at: result.created_at,
//             url: result.url,
//             secure_url: result.secure_url
//           },
//           function(err, site) {
//             if (err) return;
//             //console.log("site saved!", site);
//           }
//         );
//       }
//     );

//     // webshotStream.pipe(cloudinaryStream);
//     webshotStream.on("data", data => {});

//     // var file = fs.createWriteStream(`./screenshots/${site.file}.jpeg`, {
//     //   encoding: "binary"
//     // });

//     // renderStream.on("data", function(data) {
//     //   file.write(data.toString("binary"), "binary");
//     // });

//     // renderStream.on("end", function() {
//     //   console.log("done writing!!!!!!");
//     //   // cloudinary.v2.uploader.upload(
//     //   //   `./screenshots/cnn.jpeg`,
//     //   //   { public_id: `${site.name}/${site.name}${Date.now()}` },
//     //   //   function(result) {
//     //   //     console.log("result", result);
//     //   //     // Site.create({}, function(err, site) {
//     //   //     //   console.log("site saved!", site);
//     //   //     // });
//     //   //   }
//     //   // );
//     // });
//   });
// };
