var webshot = require("webshot");
var fs = require("fs");
var cloudinary = require("cloudinary");
var Screenshot = require("./models/screenshot.js");

cloudinary.config({
  cloud_name: "ryanjyost",
  api_key: "737735696923524",
  api_secret: "-jRo4mZuCiGDIMMQq2ghIr2rDn4"
});

module.exports = function saveImages(sites) {
  console.log("====== saving images ======");
  sites.forEach(site => {
    var renderStream = webshot(site.url);

    var stream = cloudinary.v2.uploader.upload_stream(
      { public_id: `${site.name}/${site.name}\_${Date.now()}` },
      (err, result) => {
        console.log("result", result);
        Screenshot.create(
          {
            site: site.name,
            uploaded_at: result.created_at,
            url: result.url,
            secure_url: result.secure_url
          },
          function(err, site) {
            console.log("site saved!", site);
          }
        );
      }
    );

    renderStream.pipe(stream);

    // var file = fs.createWriteStream(`./screenshots/${site.file}.jpeg`, {
    //   encoding: "binary"
    // });

    // renderStream.on("data", function(data) {
    //   file.write(data.toString("binary"), "binary");
    // });

    // renderStream.on("end", function() {
    //   console.log("done writing!!!!!!");
    //   // cloudinary.v2.uploader.upload(
    //   //   `./screenshots/cnn.jpeg`,
    //   //   { public_id: `${site.name}/${site.name}${Date.now()}` },
    //   //   function(result) {
    //   //     console.log("result", result);
    //   //     // Site.create({}, function(err, site) {
    //   //     //   console.log("site saved!", site);
    //   //     // });
    //   //   }
    //   // );
    // });
  });
};
