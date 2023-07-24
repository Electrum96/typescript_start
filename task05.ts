// export default function filterAnagrams (word: string, anagrams: string[]): string[] {
//     const standart = word.split('').sort().join('')
//     return anagrams.filter((item) => item.split('').sort().join('') === standart)

// } // массивы

//надо вывести в порядке сортировки по 
// полям Naz_Extr_Id DESC,  Appointment_Plan_Dt ASC

    const objectArray: {
	Mdoc_Id: string;
	Sex: number;
	Patient_Age: number;
	Bed_Direction: string;
	Bed_Id: number;
	Kis_Usr_Uuid: string;
	Total_Naz_Color: string;
	Date_2_Hosp: string;
	Dept_Placement_Dt: string;
	Profile_Name: string;
	Hosp_Transport: string;
	Moby_Medic_Color: string;
	Name: string;
	Ehr_Case_Id: string;
	Diagnosis: string;
	Exec_Usr_Id: string;
	Gravity: number;
	Num: number;
	Nz_Id: string;
	Appointment_Name: string;
	Naz_Extr_Id: number;
	Hold_Usr_Uuid?: any;
	Placement_Dt?: string;
	Appointment_Plan_Dt?: string;
	Sort_Surname?: string;
	Severity_Color?: string;
	Surname?: string;
	Patron?: string;
  } [] = [{
    Mdoc_Id: "b1d14aac-d449-11ed-9b9a-00155d03c95c",
    Sex: 2,
    Patient_Age: 86,
    Bed_Direction: "этаж 1й / Левое крыло / Палата 116-116.02",
    Bed_Id: 26,
    Kis_Usr_Uuid: "d1f121c2-e529-481b-b0ee-926f633a2abe",
    Total_Naz_Color: "Color_Grey",
    Date_2_Hosp: "2023-04-06 10:05:59",
    Dept_Placement_Dt: "2023-04-06 12:05:13",
    Profile_Name: "Кардиолог",
    Hosp_Transport: "Walking",
    Moby_Medic_Color: "Color_Red",
    Name: "РАИСА",
    Ehr_Case_Id: "dc59738a-d1aa-41a2-9ed8-0bae7e7a97f6",
    Diagnosis: "A01.2",
    Exec_Usr_Id: "00000000-0000-0000-0000-000000000000",
    Gravity: 2,
    Num: 12167,
    Nz_Id: "df66b1ba-e186-4dbf-a49d-c0f076ceee6a",
    Appointment_Name: "Рентгенография 2 кистей в прямой проекции",
    Naz_Extr_Id: 1,
    Hold_Usr_Uuid: null,
    Placement_Dt: "2023-07-12 00:19:07.851435",
    Appointment_Plan_Dt: "2023-07-11 18:06:34",
    Sort_Surname: "ЛАПТЕВА",
    Severity_Color: "Color_Yellow",
    Surname: "b1d14aac-d449-11ed-9b9a-00155d03c95c",
    Patron: "А-"
  },
  {
    Mdoc_Id: "2b89765a-bf78-11ed-99b0-00155d03c95c",
    Sex: 2,
    Patient_Age: 56,
    Bed_Direction: "этаж 1й / Правое крыло-119.06",
    Bed_Id: 77,
    Kis_Usr_Uuid: "d1f121c2-e529-481b-b0ee-926f633a2abe",
    Total_Naz_Color: "Color_Grey",
    Date_2_Hosp: "2023-03-10 21:43:00",
    Dept_Placement_Dt: "2023-03-10 21:43:00",
    Profile_Name: "Терапевт",
    Hosp_Transport: "Recumbent",
    Moby_Medic_Color: "Color_Red",
    Name: "ЛЮБОВЬ",
    Ehr_Case_Id: "c16e8464-23fa-4852-80e4-941301a22d1c",
    Diagnosis: "I60.9",
    Exec_Usr_Id: "00000000-0000-0000-0000-000000000000",
    Gravity: 2,
    Num: 7435,
    Nz_Id: "c193f27e-7e76-4b67-ab92-e77a476447cc",
    Appointment_Name: "Рентгенография 2 кистей в прямой проекции",
    Naz_Extr_Id: 1,
    Hold_Usr_Uuid: null,
    Placement_Dt: "2023-06-30 16:47:07.220273",
    Appointment_Plan_Dt: "2023-07-14 22:37:34",
    Sort_Surname: "ВАЛЕЕВА",
    Severity_Color: "Color_Yellow",
    Surname: "2b89765a-bf78-11ed-99b0-00155d03c95c",
    Patron: "В-"
  },
  {
    Mdoc_Id: "404608fe-d200-11ed-9b4f-00155d03c95c",
    Sex: 2,
    Patient_Age: 83,
    Bed_Direction: "этаж 1й / Правое крыло-120.07",
    Bed_Id: 85,
    Kis_Usr_Uuid: "d1f121c2-e529-481b-b0ee-926f633a2abe",
    Total_Naz_Color: "Color_Grey",
    Date_2_Hosp: "2023-04-03 12:14:29",
    Dept_Placement_Dt: "2023-04-03 13:55:24",
    Profile_Name: "Кардиолог",
    Hosp_Transport: "Recumbent",
    Moby_Medic_Color: "Color_Red",
    Name: "АЛИСА",
    Ehr_Case_Id: "06973405-4b53-43cf-ba8f-0493524e0be7",
    Diagnosis: "S72.00",
    Exec_Usr_Id: "00000000-0000-0000-0000-000000000000",
    Gravity: 1,
    Num: 11575,
    Nz_Id: "e5a97771-edb4-4460-a4fd-d467ba520709",
    Appointment_Name: "Рентгенография глазницы",
    Naz_Extr_Id: 0,
    Hold_Usr_Uuid: null,
    Placement_Dt: "2023-07-12 00:33:12.572655",
    Appointment_Plan_Dt: "2023-07-11 22:07:10",
    Sort_Surname: "ХОЛОДНЫХ",
    Severity_Color: "Color_Red",
    Surname: "404608fe-d200-11ed-9b4f-00155d03c95c",
    Patron: "К-"
  },
  {
    Mdoc_Id: "1add77c0-cf07-11ed-9b28-00155d03c95c",
    Sex: 2,
    Patient_Age: 77,
    Bed_Direction: "этаж 1й / Правое крыло / Палата 123-123.04",
    Bed_Id: 103,
    Kis_Usr_Uuid: "d1f121c2-e529-481b-b0ee-926f633a2abe",
    Total_Naz_Color: "Color_Grey",
    Date_2_Hosp: "2023-03-30 17:27:44",
    Dept_Placement_Dt: "2023-03-30 17:33:23",
    Profile_Name: "Кардиолог",
    Hosp_Transport: "Walking",
    Moby_Medic_Color: "Color_Red",
    Name: "РАИСА",
    Ehr_Case_Id: "f0940990-98b4-4868-83eb-01c68cf2edea",
    Diagnosis: "I20.8",
    Exec_Usr_Id: "00000000-0000-0000-0000-000000000000",
    Gravity: 2,
    Num: 10915,
    Nz_Id: "53b95767-95a0-4413-bdfe-9dde6254ff76",
    Appointment_Name: "Обзорная рентгенография почек и мочевыводящих путей",
	Naz_Extr_Id: 0,
    Hold_Usr_Uuid: null,
    Placement_Dt: "2023-07-12 00:33:31.28876",
    Appointment_Plan_Dt: "2023-07-12 11:08:31",
    Sort_Surname: "МАРТЮШИНА",
    Severity_Color: "Color_Yellow",
    Surname: "1add77c0-cf07-11ed-9b28-00155d03c95c",
    Patron: "И-"
  }];

  const key = "Naz_Extr_Id";

  const sortedAsc:{
	Mdoc_Id: string;
	Sex: number;
	Patient_Age: number;
	Bed_Direction: string;
	Bed_Id: number;
	Kis_Usr_Uuid: string;
	Total_Naz_Color: string;
	Date_2_Hosp: string;
	Dept_Placement_Dt: string;
	Profile_Name: string;
	Hosp_Transport: string;
	Moby_Medic_Color: string;
	Name: string;
	Ehr_Case_Id: string;
	Diagnosis: string;
	Exec_Usr_Id: string;
	Gravity: number;
	Num: number;
	Nz_Id: string;
	Appointment_Name: string;
	Naz_Extr_Id?: number;
	Hold_Usr_Uuid?: any;
	Placement_Dt?: string;
	Appointment_Plan_Dt?: string;
	Sort_Surname?: string;
	Severity_Color?: string;
	Surname?: string;
	Patron?: string;
  } [] = objectArray.sort(function (user1, user2) { return user1.Naz_Extr_Id > user2.Naz_Extr_Id ? 1 : -1; })

  console.log(sortedAsc);
  



//   const key = "Naz_Extr_Id";
//   const sorted = data.sort();
//   console.log(sorted);

//   class  implements Responce {
	
// 	data.sort(function (user1: string|number , user2: string|number) { return user1[key] > user2[key] ? 1 : -1; });
// 	sort(): number {
	
// 	}
//   }