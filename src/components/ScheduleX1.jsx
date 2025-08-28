import React from 'react';
import './ScheduleX1.css';

const scheduleData = [
  // Senin
  { no: 1, day: 'Senin', time: '07:15-08:00', subject: 'B.Indonesia' },
  { no: 2, day: 'Senin', time: '08:00-08:45', subject: 'Matematika' },
  { no: 3, day: 'Senin', time: '08:45-09:30', subject: 'Informatika' },
  { no: 4, day: 'Senin', time: '09:30-10:15', subject: 'PPKn/Pancasila' },
  { no: 5, day: 'Senin', time: '10:30-11:15', subject: 'FISIKA' },
  { no: 6, day: 'Senin', time: '11:15-12:00', subject: 'EKONOMI' },
  { no: 7, day: 'Senin', time: '13:00-13:45', subject: 'B.INGGRIS' },
  { no: 8, day: 'Senin', time: '13:45-14:30', subject: 'KIMIA' },
  { no: 9, day: 'Senin', time: '14:30-15:15', subject: 'SENI BUDAYA' },
  // Selasa
  { no: 10, day: 'Selasa', time: '07:15-08:00', subject: 'MATEMATIKA' },
  { no: 11, day: 'Selasa', time: '08:00-08:45', subject: 'BIOLOGI' },
  { no: 12, day: 'Selasa', time: '08:45-09:30', subject: 'B.INGGRIS' },
  { no: 13, day: 'Selasa', time: '09:30-10:15', subject: 'SEJARAH' },
  { no: 14, day: 'Selasa', time: '10:30-11:15', subject: 'GEOGRAFI' },
  { no: 15, day: 'Selasa', time: '11:15-12:00', subject: 'PENJAS' },
  { no: 16, day: 'Selasa', time: '13:00-13:45', subject: 'B.INDONESIA' },
  { no: 17, day: 'Selasa', time: '13:45-14:30', subject: 'INFORMATIKA' },
  { no: 18, day: 'Selasa', time: '14:30-15:15', subject: 'SOSIOLOGI' },
  // Rabu
  { no: 19, day: 'Rabu', time: '07:15-08:00', subject: 'GEOGRAFI' },
  { no: 20, day: 'Rabu', time: '08:00-08:45', subject: 'EKONOMI' },
  { no: 21, day: 'Rabu', time: '08:45-09:30', subject: 'B.INDONESIA' },
  { no: 22, day: 'Rabu', time: '09:30-10:15', subject: 'INFORMATIKA' },
  { no: 23, day: 'Rabu', time: '10:30-11:15', subject: 'MATEMATIKA' },
  { no: 24, day: 'Rabu', time: '11:15-12:00', subject: 'FISIKA' },
  { no: 25, day: 'Rabu', time: '13:00-13:45', subject: 'KIMIA' },
  { no: 26, day: 'Rabu', time: '13:45-14:30', subject: 'B.INGGRIS' },
  { no: 27, day: 'Rabu', time: '14:30-15:15', subject: 'PENJAS' },
  // Kamis
  { no: 28, day: 'Kamis', time: '07:15-08:00', subject: 'SEJARAH' },
  { no: 29, day: 'Kamis', time: '08:00-08:45', subject: 'SOSIOLOGI' },
  { no: 30, day: 'Kamis', time: '08:45-09:30', subject: 'BIOLOGI' },
  { no: 31, day: 'Kamis', time: '09:30-10:15', subject: 'B.INDONESIA' },
  { no: 32, day: 'Kamis', time: '10:30-11:15', subject: 'MATEMATIKA' },
  { no: 33, day: 'Kamis', time: '11:15-12:00', subject: 'INFORMATIKA' },
  { no: 34, day: 'Kamis', time: '13:00-13:45', subject: 'EKONOMI' },
  { no: 35, day: 'Kamis', time: '13:45-14:30', subject: 'B.INGGRIS' },
  { no: 36, day: 'Kamis', time: '14:30-15:15', subject: 'KIMIA' },
  // Jumat
  { no: 37, day: 'Jumat', time: '07:15-08:00', subject: 'PENJAS' },
  { no: 38, day: 'Jumat', time: '08:00-08:45', subject: 'SENI BUDAYA' },
  { no: 39, day: 'Jumat', time: '08:45-09:30', subject: 'PPKn/Pancasila' },
  { no: 40, day: 'Jumat', time: '09:30-10:15', subject: 'BIOLOGI' },
  { no: 41, day: 'Jumat', time: '10:30-11:15', subject: 'GEOGRAFI' },
  { no: 42, day: 'Jumat', time: '11:15-12:00', subject: 'SEJARAH' },
  { no: 43, day: 'Jumat', time: '13:00-13:45', subject: 'EKONOMI' },
  { no: 44, day: 'Jumat', time: '13:45-14:30', subject: 'SOSIOLOGI' },
  { no: 45, day: 'Jumat', time: '14:30-15:15', subject: 'INFORMATIKA' },
];

const ScheduleX1 = () => {
  return (
    <div className="schedule-container">
      <header className="schedule-header">
        <h1>Jadwal Pelajaran Kelas X.1</h1>
        <p>SMAN 2 Mandau TP 2025 - 2026</p>
      </header>
      <section className="schedule-table-shape">
        <table className="schedule-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Hari</th>
              <th>Jam</th>
              <th>Mata Pelajaran</th>
            </tr>
          </thead>
          <tbody>
            {scheduleData.map((item, idx) => (
              <tr key={idx}>
                <td>{item.no}</td>
                <td>{item.day}</td>
                <td>{item.time}</td>
                <td>{item.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <footer className="schedule-footer">
        <span>Designed by jarrprtma</span>
      </footer>
    </div>
  );
};

export default ScheduleX1;
