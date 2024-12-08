const axios = require("axios");
const https = require("https");

const cookie = 'cf_clearance=vo6T3ro5mNLgAW7Q37mp4ARZFp3ZBPV4hE7IEjQWqZI-1729517584-1.2.1.1-8LnTZB7WitITZ1u88HteB9LZ1spIXAUMyANP.YM5PbikHKYjbFCSuynBcj5napl5whLCXCn0TCiNjLF4LMzRsDNm0X8V0KmZbtNA0.UYEonKmRsffOgKgwS9IkZl4VmCke.3lFfoK8CEzxJ9nvBptVbHiFH9qIu3zvoQrvE9haoHLUOWvc3F_WKqqyKdZbNoZ85kj_Zz4pczEyu3LgqVnt9W7e9ZThrXk8DIkl1f5D6VfcNIWFd.6OWDzRvu_fk0VyuHGjbw6GtmePf5VPM8RVuDxRJi_2rfwgIBgUACsT1CohQnqjwNbv4CvJ2DeOwY6x4HZ.hWKGM5tlT2shVdbOsTvHqnGdPzmOqNirT42_RfS615L0T7xCyJf6AfauytKDH_tYDkUt0G_RRDw8Ux.Q; ASP.NET_SessionId=yi23jpgez2zmgxaxaz2pop4r; __RequestVerificationToken=oqKOEtDG_GapIdodn1BSN38Us3M2c-neaFc6UgK0Z6MVjgHNmztyr-S6UkTmIeey4zTlszLjI2EpC9ox8AShOVDkvB--A0KSRaYI3sX1Qnw1; PAVWs3tE769MuloUJ81Y=qCk8u16S1sSzKjDZ2NUomuYEQ_X373FJuSn-VbdSnSs; ASC.AUTH=F5FCE54394BDE4482CFEFD9EC2380B08A57A8A08767A35DD11B4C3E0DD24EAFCC28EAED97406689257F4C43A9931E588A0747755C04901BE25ACC6B18D59520CFED7018E31A09A37ACDAC067C7BC7BE945C13CB61D415CA750683861344B27EB8B9988BDAE13C29F922A1DDFA5454588D2AEFA8231A816ADC2C2C4F093FCC899; DT_DKHP_Reg=45cab68a-1651-4736-bac8-22f9fe794265'

async function dangKyHocPhan(idNhom) {
  // Thiết lập các tiêu đề yêu cầu
  const headers = {
    Accept: "application/json, text/javascript, */*; q=0.01",
    "Accept-Language":
      "vi, vi-VN;q=0.9, fr-FR;q=0.8, fr;q=0.7, en-US;q=0.6, en;q=0.5",
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    priority: "u=1, i",
    "sec-ch-ua":
      '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    "sec-ch-ua-mobile": "?1",
    "sec-ch-ua-platform": '"Android"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-requested-with": "XMLHttpRequest",
    Referer: "https://thanhtoanhocphi.epu.edu.vn/dang-ky-hoc-phan.html",
    Cookie: cookie,
  };

  // Dữ liệu POST
  const data = new URLSearchParams();
  data.append("param[IDDotDangKy]", "35");
  data.append("param[IDLoaiDangKy]", "1");
  data.append("param[GuidIDLopHocPhan]", "L7UgYI70BPLcnYmudqpd1A");
//   data.append("param[IDNhomThucHanh]", idNhom);


  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  try {
    const response = await axios.post(
      "https://thanhtoanhocphi.epu.edu.vn/dang-ky-hoc-phan.html",
      data,
      {
        httpsAgent: agent,
        headers: headers,
      }
    );

    return response.data;
  } catch (error) {
    console.error(`Có lỗi xảy ra: ${error.message}`);
    return { ExceptionMessage: error.message };
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

(async () => {
  while (true) {
    const responseNhom1 = await dangKyHocPhan("1");
    if (responseNhom1.Code == "01") {
      console.log(`[-]: ${responseNhom1.ExceptionMessage}`);
    } else if (responseNhom1.Code == "00") {
      console.log(`[-]: Bạn đã đăng ký thành công nhóm 1`);
      break;
    }
    // const responseNhom2 = await dangKyHocPhan('2');
    // if (responseNhom2.Code == '01') {
    //     console.log(`[-]: ${responseNhom2.ExceptionMessage}`);
    // } else if (responseNhom2.Code == '00') {
    //     console.log(`[-]: Bạn đã đăng ký thành công nhóm 2`);
    //     break;
    // }
  }
})();


// dPKBPcYvo7LuF14omotx_Q
// L7UgYI70BPLcnYmudqpd1A
// lL-Wgm_hLOfqws9KuYJOiQ