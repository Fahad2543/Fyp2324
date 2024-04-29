import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const PharmacySignup = () => {
    const [licenseNumber, setLicenseNumber] = useState('');
    const [licensePic, setLicensePic] = useState('');
    const [issuedLicense, setIssuedLicense] = useState('');
    const [expireDate, setExpireDate] = useState('');
    const [websiteLink, setWebsiteLink] = useState('');

    const handleSignup = () => {
        // Handle signup logic here
        console.log('Signup button clicked!');
        console.log('License Number:', licenseNumber);
        console.log('License Pic:', licensePic);
        console.log('Issued License:', issuedLicense);
        console.log('Expire Date:', expireDate);
        console.log('Website Link:', websiteLink);
    };

    return (
        <View>
            <TextInput
                placeholder="License Number"
                value={licenseNumber}
                onChangeText={text => setLicenseNumber(text)}
            />
            <TextInput
                placeholder="License Pic"
                value={licensePic}
                onChangeText={text => setLicensePic(text)}
            />
            <TextInput
                placeholder="Issued License"
                value={issuedLicense}
                onChangeText={text => setIssuedLicense(text)}
            />
            <TextInput
                placeholder="Expire Date"
                value={expireDate}
                onChangeText={text => setExpireDate(text)}
            />
            <TextInput
                placeholder="Website Link (optional)"
                value={websiteLink}
                onChangeText={text => setWebsiteLink(text)}
            />
            <Button title="Signup" onPress={handleSignup} />
        </View>
    );
};

export default PharmacySignup;





// import React, { useState } from 'react';
// import { View, TextInput, Button, Platform, Alert } from 'react-native';
// // import DateTimePicker from '@react-native-community/datetimepicker';
// import DocumentPicker from 'react-native-document-picker';

// const PharmacySignup = () => {
//     const [licenseNumber, setLicenseNumber] = useState('');
//     const [licensePic, setLicensePic] = useState(null);
//     const [issuedLicense, setIssuedLicense] = useState(new Date());
//     const [expireDate, setExpireDate] = useState(new Date());
//     const [websiteLink, setWebsiteLink] = useState('');

//     const [showIssuedDatePicker, setShowIssuedDatePicker] = useState(false);
//     const [showExpireDatePicker, setShowExpireDatePicker] = useState(false);

//     const handleSignup = () => {
//         console.log('Signup button clicked!');
//         console.log('License Number:', licenseNumber);
//         console.log('License Pic:', licensePic);
//         console.log('Issued License:', issuedLicense);
//         console.log('Expire Date:', expireDate);
//         console.log('Website Link:', websiteLink);
//     };

//     const handleIssuedDateChange = (event, selectedDate) => {
//         const currentDate = selectedDate || issuedLicense;
//         setShowIssuedDatePicker(Platform.OS === 'ios');
//         setIssuedLicense(currentDate);
//     };

//     const handleExpireDateChange = (event, selectedDate) => {
//         const currentDate = selectedDate || expireDate;
//         setShowExpireDatePicker(Platform.OS === 'ios');
//         setExpireDate(currentDate);
//     };

//     const pickDocument = async () => {
//         try {
//             const res = await DocumentPicker.pick({
//                 type: [DocumentPicker.types.images], // Specify the types of files you want to pick
//             });
//             setLicensePic(res.uri);
//         } catch (err) {
//             if (DocumentPicker.isCancel(err)) {
//                 // User cancelled the picker
//             } else {
//                 throw err;
//             }
//         }
//     };

//     return (
//         <View>
//             <TextInput
//                 placeholder="License Number"
//                 value={licenseNumber}
//                 onChangeText={text => setLicenseNumber(text)}
//             />
//             <Button title="Select License Pic" onPress={pickDocument} />
//             {licensePic && <Text>Selected file: {licensePic}</Text>}
//             <Button title="Select Issued License Date" onPress={() => setShowIssuedDatePicker(true)} />
//             {showIssuedDatePicker && (
//                 <DateTimePicker
//                     value={issuedLicense}
//                     mode="date"
//                     display="default"
//                     onChange={handleIssuedDateChange}
//                 />
//             )}
//             <Button title="Select Expire Date" onPress={() => setShowExpireDatePicker(true)} />
//             {showExpireDatePicker && (
//                 <DateTimePicker
//                     value={expireDate}
//                     mode="date"
//                     display="default"
//                     onChange={handleExpireDateChange}
//                 />
//             )}
//             <TextInput
//                 placeholder="Website Link (optional)"
//                 value={websiteLink}
//                 onChangeText={text => setWebsiteLink(text)}
//             />
//             <Button title="Submit" onPress={handleSignup} />
//         </View>
//     );
// };

// export default PharmacySignup;
