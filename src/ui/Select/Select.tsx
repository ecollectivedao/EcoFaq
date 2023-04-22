import './Select.scss'

import ukraine from 'assets/img/Ukraine.png'

export const Select = () => {
  return (
    <select className='select'>
        <option value="dsad">
            
        </option>
        <option value="dsad"><img src={ukraine} alt="" /></option>
        <option value="dsad"><img src={ukraine} alt="" /></option>
    </select>
  )
}


// import { Select, Page, setOptions, getJson, localeDe } from '@mobiscroll/react';

// setOptions({
//     locale: localeDe,
//     theme: 'ios',
//     themeVariant: 'light'
// });

// const App: React.FC = () => {
//     const [myData, setMyData] = React.useState([]);
    
//     const inputProps = {
//         inputStyle: 'box',
//         labelStyle: 'stacked',
//         placeholder: 'Please select...'
//     };
    
//     React.useEffect(() => {
//         getJson('https://trial.mobiscroll.com/content/countries.json', (resp: any) => {
//             const countries: any = [];
//             for (let i = 0; i < resp.length; ++i) {
//                 const country = resp[i];
//                 countries.push({ text: country.text, value: country.value });
//             }
//             setMyData(countries);
//         });
//     }, []);

//     const renderCustomItem = (item: any) => {
//         return <div className="md-country-picker-item">
//             <img className="md-country-picker-flag" src={'https://img.mobiscroll.com/demos/flags/' + item.data.value + '.png'} alt="Flag" />
//             {item.display}
//         </div>;
//     }

//     return (
//         <Page>
//             <Select
//                 data={myData}
//                 label="Countries"
//                 inputProps={inputProps}
//                 display="anchored"
//                 itemHeight={40}
//                 renderItem={renderCustomItem}
//             />
//         </Page>
//     ); 
// }
