import { CounsellingData, ClinicalData } from "./counsellordata.js";
console.log(CounsellingData[0]);

export default (function () {
  $(document).ready(function () {
    var bookswiper = new Swiper(".bookSwiper", {
      rewind: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
     
    });

    $(CounsellingData).each(function (e) {
      $("#CounsellingData").append(`
      <div class="swiper-slide d-flex justify-content-start gap-3 ">
                        <div class="card-wrapper">
                          <div class="card">
                            <div class="card-image">
                              <img
                                src=${CounsellingData[e].imgSrc}
                                width="100%"
                                alt="profile-card" />
                            </div>
                            <div class="details">
                              <h3>
                                ${CounsellingData[e].name}<br />
                                <span class="job-title"> ${CounsellingData[e].department}</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div class="counsellor_details py-5">
                          <h6>Name : ${CounsellingData[e].name} </h6>
                          <h6>Department : ${CounsellingData[e].department} </h6>
                          <h6>Languages : ${CounsellingData[e].language}</h6>
                          <h6>Time : ${CounsellingData[e].time}</h6>
                          <button class="btn detailsbtn">View Details</button>
                        </div>
                      </div>
    `);
    });
    $(ClinicalData).each(function (e) {
      $("#ClinicalData").append(`
      <div class="swiper-slide d-flex justify-content-start gap-3">
                        <div class="card-wrapper">
                          <div class="card">
                            <div class="card-image">
                              <img
                                src=${ClinicalData[e].imgSrc}
                                width="100%"
                                alt="profile-card" />
                            </div>
                            <div class="details">
                              <h3>
                                ${ClinicalData[e].name}<br />
                                <span class="job-title"> ${ClinicalData[e].department}</span>
                              </h3>
                            </div>
                          </div>
                        </div>
                        <div class="counsellor_details py-5">
                          <h6>Name : ${ClinicalData[e].name} </h6>
                          <h6>Department : ${ClinicalData[e].department} </h6>
                          <h6>Languages : ${ClinicalData[e].language}</h6>
                          <h6>Time : ${ClinicalData[e].time}</h6>
                          <button class="btn detailsbtn">View Details</button>
                        </div>
                      </div>
    `);
    });
  });
})();
