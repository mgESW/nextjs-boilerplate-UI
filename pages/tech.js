import {useState} from 'react'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import moment from 'moment';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {

    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedProgram, setSelectedProgram] = useState(null);
    const [agreed, setAgreed] = useState(false)
    const [date, setDate] = useState();
    const [hospitalName, setHospitalName] = useState();
    const [sessionNumber, setSessionNummber] = useState();
    const [mrn, setMRN] = useState("");
    const [beneficiaryName, setBeneficiaryName] = useState("");
    const [age, setAge] = useState();
    const [gender, setGender] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [Education, setEducation] = useState("");
    const [Occupation, setOccupation] = useState("");
    const [Districts, setDistricts] = useState("");
    const [State, setState] = useState("");
    const [Diagnosis, setDiagnosis] = useState("");
    const [Vision, setVision] = useState("");

    const [MDVI, setMDVI] = useState("");
    const [typeCounselling, settypeCounselling] = useState("");
    const [schoolName, setschoolName] = useState("");
    const [studentName, setstudentName] = useState("");
    const [visualAcuityRE, setvisualAcuityRE] = useState("");
    const [visualAcuityLE, setvisualAcuityLE] = useState("");
    const [unaidedNearVision, setunaidedNearVision] = useState("");
    const [refractionVALE, setrefractionVALE] = useState("");
    const [LVA, setLVA] = useState("");
    const [LVANear, setLVANear] = useState("");
    const [nonOpticalAid, setnonOpticalAid] = useState("");
    const [actionNeeded, setactionNeeded] = useState("");
    const [typeCamp, settypeCamp] = useState("");
    const [screeningPlace, setscreeningPlace] = useState("");
    const [organiser, setorganiser] = useState("");
    const [contactNumber, setcontactNumber] = useState("");
    const [address, setaddress] = useState("");
    const [screenedTotal, setscreenedTotal] = useState("");
    const [refractiveErrors, setrefractiveErrors] = useState("");
    const [spectaclesDistributed, setspectaclesDistributed] = useState("");
    const [checked, setchecked] = useState("");
    const [refer, setrefer] = useState("");
    const [staff, setstaff] = useState("");
    const [lowVision, setlowVision] = useState("");

    const [APIResponse, setAPIResponse] = useState(null);
    const [focusedInput, setFocusedInput] = useState(null);

    function myFunction() {   
    }

    const handleSubmit = async (e, selectedOption) => {

    }
    
    return (
    
    <>   
    {' '}
              <Image
                src="/vision-aid-logo-trns.png"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={100}
                priority
              /> 
<div className={styles.main}>
<div className={styles.main}>
Vision Aid Partner Tracking
    System</div>
<p className={styles.code}>
    This form is for submitting the personal information of a beneficiary
</p>
</div>
<form action="#" method="POST" onSubmit={(e) => handleSubmit(e, selectedOption)}
  className={styles.main}>
<p className={styles.main}>
    <h2>
        <label htmlFor="option-select" className={styles.card}>
            Select the desired subcategory
        </label>
        <div className={styles.card}>
            <select
            id="option-select"
            name="option-select"
            onChange={(e) => setSelectedOption(e.target.value)}
            className={styles.card}>
            <option value="">Subcategory</option>
            <option value="low-vision-screening">Low Vision Screening</option>
            <option value="comp-low-vision">Comprehensive Low Vision Evaluation</option>
            <option value="functional-vision">Functional Vision</option>
     </select> </div> </h2>
     <div className={styles.main}>
    <p id="demo"></p>
    <button
        type="submit"
        className={styles.description}
        onClick={() => myFunction()}
    >
        Submit
    </button>
</div>

</p>


</form>

</>
)}