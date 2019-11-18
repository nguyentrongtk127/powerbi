import React, { useState } from 'react';
import './App.css';
import Report from 'powerbi-report-component';

function App() {
  const [report, setReport] = useState(null);
  function printReport() {
    if(report) report.print();
  }
  return (
    <div className="App">
      <Report embedType="report"
        tokenType="Embed"
        accessToken="H4sIAAAAAAAEAB2Wtw7sBhIE_-WlFMClJwUooPfeM6Nfem-F-_dbKJ-o0F09__6x0qef0uLP33-eSEdt2KUqLbzmbFxh4MSIhywBXKLSKGsd7FJ6BFIEERMKSplHbeY_tzpDRrHqzivNmCY7J---4LsMSVce0hZc48klugRajSSI01RRrUfKLUfBGS6w4HXwPYpFuHsl3DVXSdYlLHdf_ufcCf-7ayANyhS5cM2wiVDuuTPXZ4wR6Wu6IULCnNAwapSZSpOun4-Sv41801GgGhf3UjL_jDE1CiG-hP1IqJQe-MQWemYMz-gb76wyS1QvrqrWDzGkVZkiLmYtxE0APMoj9NqQQ8aF4G_RLzMx5NWek5_KYgHDo-2IVEI4zT1li8yF3BukzLtyfCPAw5aNGG-gK01WRZw-QjGuqwbCU0OvTFnfZb2GsKzH1Tky1PqaWiezKrTymS80s0BULXDmCg3GNT9yCcxHd3RUUODCtXvi6tBGiSy8p5CZfvUtRCtlVR2gPC3hnWs0cBUoBcP0C3qLn9B5q2P2x4xmmCeNuRnobgwPfLihev50zzFiMSFM3wwuY76dzS2L1E8nTAo4FZkcADy86f5nBfjoOK6gGdB4hFIcUF7MuIT6_nHlyRIDfbiH1htnKoTOTtd5k9mQ2eo6Gydfnjjm33UUjbQCncDGSVyjLrNPTQihuPhEDlZ90IHp3q82jvESjyvaHgdJ9z3Gn22JwQmU1O3Wsh0EwZyK5pleqzGT8gsyAv1Gz9NVKo86j_QE0ufUf7VpS2jHGEsQKlcvqbHGuNHqAn1aXvBw5JWRlNWks9VxzvtpVzLmBF8qbrQmaTEqPSUWQh-lQayeTDpKZ-EJkuY1qgZtjGZ3ZhpUD-sw5A1vL3zDedrw0eWjujttT0yFqI0vIGy4VyouSTCP2_ZHC4dwy1BFjSo3EcqzIkNm52vnC5cizrvfouAIbDHHcVjEOqw5_uPKfse4ulepFes6MIuJ2BQ1eVZExkILQ6ugcsEjEXGRjsVxtZXd9udy3nT4JHNMr19Rnxna9cyPd6dN0mtgDFNSWb-Nl3_7KKEpqg1_9XKp5mskeAHxND_jQkSeeSe76-QU1EdmF92VK6DdVAVO3aC2hNWkTsWmieQI4ZjvsoZf60ZfWOv7og91-piNRKmEXhqydTmB6_Nooao99BCIIdSh1vCScoH7ta_vebCamcR1fNTwS_vWM8Eg_wlzwWCENF2bpT67DywyqbJ_rrhsBUiAEimyHpbrmsQBIO3AUY-nVxFV1wXxcyws22rZVTH4IbmzKb8IY-1s7UIRShz9fmNvDDNzpizFTYgxKVXDcVm32jW7HkT0Pjmo1Q-4JNDxCfXNvAkXQ2lCknBYR_dHlU5ZGc8SejtwZFwY9bmCStA0N1_s5ee8yVQlIwzDCr6V3PRJgFVY4ScL_KZgyeaSW4yLZ41cwvM_IvKStp5dgUvilEh6m8Vi5KXZGadZcm6rIOMc2gbQUShH1AfELG2YPfBJDzoiiO9EanpAx1_lkHpJI7rQ4Rst266d9FfenzXdf9XomOxMBZVJpynm9owSCBw5vbxF-gDrzw4V2ST6mEdNIz90emWuMV75faOQPVtOT5EkgKY3B_aI61KOHqQzf3EPyRVxRIWJa0_2RU6lQK3SplCjPB4okUF6mIAvn4-GlKytxR8kH1BQh94NRgEtnguvTBNqCLkIxuyuD4lLExIBLXvTG36t82w8aKkI_iIYbxkg22tDBdzR2PZGV4hkwDPJ_r6_Libc1H08Xt5iMnmROCM1VezZR0N7lxTPYITlAGK9pxiLiRLGyfEmJYmZfg6e9R74XnHT-mBd4yZnSWB10DDNcRGpFM-9krFVNWHze27dEGY_sPC-vbkz9zMAagViDRTkpcRhzZSBDOLrvwhG2CDSw28PsFGJ84AqsncBwbqpWT4pj-joMEyYxpNgiyFyquWTYNkNK2ikfCsG3RhoF0_KDS5Ccdj2yOUCqeP8_o7ZNsLJJL-cqNHx86kvX6fe1nyCracUapam59Kn5hcze5-BX7jzdg6CkbvEPKfiFdubBjbY5AshzyeRuVePwvwrpjClHw0Gv04pevFiIbT_G3PQn_z9A3RnOXPLIixRQUYPODfpmCjt82aHpMB6gO2O1XDGqixwlu5ltWPAdOrg2jieoBOzvbIXrctMY7kfUjc_66ubI6uAMxYol5BJbI_755dgtS1pj3dpFu7UCt226H_-_PWHXZ95n9Ty-b0eTczkOjTeVl9qFMlQhOkHWgCmV0hkA35G76QeSdPD1zVNxYE5g_8sFxIDVYF6rp7bAZs7ajIFGlyqHOLKVlCW6gfy4jUnd5yblWgPo8Sddknz6JxO1HzSiBctXSRaqlePq5M2-qeGek-iiOmFnsNYpGm2umDatLgCYvwino-L7nNgbLbVZWEja5WiC4z04GbdmpA5EpIA1OK37u5Fi86pZEkHQlgF71Ub1Df7Mszr_FgqbawsSwOD45d0AFE1XO4jbk_crw2TK7Nj8FSS7tPn0P6cqel3nqc6g1emS-QNCJBA5FqJ9lsDnmIJ9fd6oJaULCTidJnRFuEaIp4c42dfNUb9z3-Yn_lbrnLwozzHpt8NMlNhiNeVCAJAft1c_125TT2m-7GWv7NpLsB37TGVe5f2ExLqV9YH-MsOI98CHPUhkDzzmHtuJO7re9Ol4vSmwQ5oUrjnnYFSsS0I25FpW6EmBS5SCrekiIUQPAI3GdNLV0am_ORu_WzRTLA2Lo8kB1-MbQNl98XDBMSBjilEnhtghVC-MTr2OFFuVZ52sBNPDJKfKLhMjS3_N4rd8pnzWA5gbl2S6HvECDrVvZ_pk1tw8N41xxIwAMt4-BgaGVtWW_K4YZHp6ctslSVYb6ut32YgwXSNicu7XdiXwiokD0h4Ee_7KAhV-mHtfvM2dtejB7tXukbeSFjjg1XkIhXlx0ED9fi2AlkIlq8RFnVm-ykPXvt42g6fBWb_MP_v_8gwwOVuCwAA"
        embedUrl="https://app.powerbi.com/reportEmbed?reportId=f6bfd646-b718-44dc-a378-b73e6b528204&groupId=be8908da-da25-452e-b220-163f52476cdd&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVVTLU5PUlRILUNFTlRSQUwtcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQifQ%3d%3d"
        embedId="f6bfd646-b718-44dc-a378-b73e6b528204"
        dashboardId=""
        pageName=""
        extraSettings={{
          filterPaneEnabled: false,
          navContentPaneEnabled: false,
        }}
        permissions="All"
        style={{
          height: '1000px',
          border: '0',
          padding: '20px',
          background: '#eee'
        }}
        onLoad={(report) => {
          setReport(report)
          /*
          you can set filters onLoad using:
          this.report.setFilters([filter]).catch((errors) => {
            console.log(errors);
          });*/
          console.log('EVENT Report Loaded!', report);
          //this.report = report (Read docs to know how to use report object that is returned)
        }}
        onSelectData={(data) => {
          console.log('EVENT You clicked chart:', data)
        }}
        onPageChange={(data) => {
          console.log('EVENT You changed page to:', data)
        }}
        onTileClicked={data => {
          console.log('EVENT Data from tile', data);
        }}
      />
      <button onClick={printReport}>Print</button>
    </div>
  );
}

export default App;
