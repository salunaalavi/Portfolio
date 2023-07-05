import classes from "./about.module.scss";
import { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <section className={classes.about} id="about">
      <div className={classes.container}>
        <h2 data-aos="slide-right">Tentang Saya</h2>

        <div className={classes.row}>
          <div className={classes.columnLeft} data-aos="fade-right">
            <h3>
              Dimulai akan rasa penasaran akan Web Development dan rasa haus berkreatifitas.
            </h3>
            <p>
              Perjalanan saya belajar mengenai segala sesuatu tentang web
              dimulai pada saat saya menginjak semester tiga di perkuliahan.
              Waktu itu saya mendapatkan sebuah mata kuliah mengenai
              pengembangan web, dan pada waktu itu pula saya mendapatkan tugas
              untuk membuat sebuah project kompleks dengan bantuan kerangka
              kerja Laravel <i className="fas fa-link"></i>{" "}
              <a
                href="https://github.com/salunaalavi/project-sertifikasi-himpunan"
                target="_blank"
                rel="noreferrer"
              >
                CityRide Yogya
              </a>
              . Sampai dengan saat ini, saya mempelajari berbagai macam kerangka
              kerja pengembangan web, khususnya frontend.
            </p>

            <p>
              Disamping itu, saya juga merupakan anggota staff divisi Penelitian
              dan Pengembangan Kelompok Studi Linux, sebuah OS yang sangat
              berjasa besar dalam sejarah software engineer.
            </p>
            
            <p>
              Saya merupakan peserta Magang dan Studi Independed (MSIB) yang diselenggarakan oleh Kampus Merdeka,
              saya mengikuti program MSIB dua kali, yaitu pada batch 2 (Februari 2022 - Juli 2022) sebagai mentee
              pada Studi Independed Altera Accademy di kelas Vue.js. Selanjutnya saya mengikuti program MSIB pada
              batch 3 (Agustus 2022 - Desember 2022) sebagai Full Stack Developer di P.T. Baracipta Esa Engineering
              (Beecons) yang bertanggungjawab untuk mengembangkan sebuah aplikasi Learning Management System (LMS)
              {" "}<i className="fas fa-link"></i>{" "}
              <a
                href="https://stufast.id"
                target="_blank"
                rel="noreferrer"
              >
                Stufast
              </a>
            </p>
            
            <p>
              Saya juga memiliki pengalaman magang di sebuah startup Software as a Service Qiscus pada (Januari 2023 - Juli 2023).
              Saya menjadi seorang Front End Engineer yang bertugas untuk melakukan riset sekaligus pengembangan aplikasi Costumer Relationship Management
              (CRM)
            </p>

            <p>
              Saya menjunjung tinggi nilai keberagaman dan juga suka menjalin
              interaksi-interaksi yang belum saya miliki sebelumnya. Saya sangat
              suka berpetualang dan menemukan sesuatu yang baru yang berharga
              dan dapat memberi pelajaran bagi saya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
