type Informasi_elemen = {
    value: any;
    index: number;
    type: string;
};

type informasi_elemen = (arr: any[]) => Informasi_elemen[];

const analyzeElements: informasi_elemen = (arr) => {
    const hasil: Informasi_elemen[] = []; // optional: kasih tipe eksplisit

    for (let i = 0; i < arr.length; i++) {
        hasil.push({
            value: arr[i],
            index: i,
            type: typeof arr[i],
        });
    }

    return hasil;
};

