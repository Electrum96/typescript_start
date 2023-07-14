const electricityUserData = {
	readings: 95,
	units: "kWt",
	mode: "double",
};

const waterUserData = {
	readings: 3,
	units: "m3",
};

const elRate = 0.45;
const wRate = 2;

const monthPayments = [0, 0]; // [electricity, water]

const calculatePayments = ({readings, units, mode}: {readings: number, units: string, mode: string}, wData:{ readings: number, units: string} , elRate: number, wRate:number) => {
	if (mode === "double" && readings < 50) {
		monthPayments[0] = readings * elRate * 0.7;
	} else {
		monthPayments[0] = readings * elRate;
	}

	monthPayments[1] = wData.readings * wRate;
};

calculatePayments(electricityUserData, waterUserData, elRate, wRate);

const sendInvoice = (monthPayments: number[], electricityUserData: {readings: number, units:string, mode: string}, waterUserData: {readings: number, units: string}) => {
	const text = `    Hello!
    This month you used ${electricityUserData.readings} ${electricityUserData.units} of electricity
    It will cost: ${monthPayments[0]}€
    
    This month you used ${waterUserData.readings} ${waterUserData.units} of water
    It will cost: ${monthPayments[1]}€`;

	console.log(text);
	

	return text;

};

sendInvoice(monthPayments,electricityUserData, waterUserData)
  
 