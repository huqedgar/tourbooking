// const handleSubmit = (evt) => {
//     evt.preventDefault();
//     const process = async (typePeople, amount) => {
//         try {
//             const form = new FormData();
//             form.append('tour', tourId);
//             form.append('type_people', typePeople);
//             form.append('amount', amount);
//             const res = await authAPI().post(endpoints['create-ticket'], form, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });
//             if (res.status === 201) {
//                 toast.promise(
//                     () =>
//                         new Promise((resolve) => {
//                             setTimeout(() => resolve('Successfully!'), 1500);
//                         }),
//                     {
//                         pending: 'Processing!',
//                         success: 'Successfully!',
//                         error: 'Error!',
//                     },
//                 );
//                 setShowModal2(true);
//             } else {
//                 return toast.error('The system is having an error! Please come back later!');
//             }
//         } catch (ex) {
//             toast.error(ex.message);
//         }
//     };
//     if (numAdult > 0) {
//         process(typesCustomer[0].id, numAdult);
//     }
//     if (numChild > 0) {
//         process(typesCustomer[1].id, numChild);
//     }
// };
