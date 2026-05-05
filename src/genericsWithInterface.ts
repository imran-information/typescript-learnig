interface Developer<TW, TB = null> {
    id: number,
    name: string,
    role: string,
    device: {
        brand: string,
        model: string,
        ramGb: number,
    },
    watch: TW,
    bike?: TB
}


interface Watch {
    name: string,
    smart: boolean,
    device: {
        brandName: string,
        model: string,
        price: number,
    },
}

interface Bike {
    name: string,
    version: string,
    engine: {
        brandName: string,
        model: string,
        price: number,
    },
}

const meDeveloper: Developer<Watch> = {
    id: 16049,
    name: 'imran',
    role: 'Backend Developer',
    device: {
        brand: "asus PC",
        model: 'core-i 3',
        ramGb: 8,
    },
    watch: {
        name: 'smart watch',
        smart: true,
        device: {
            brandName: 'apple-1',
            model: 'ls-25',
            price: 20000,
        }
    }

}


const JobaerDeveloper: Developer<Watch, Bike> = {
    id: 16050,
    name: 'Jobaer',
    role: 'front-end Developer',
    device: {
        brand: "Esonic PC",
        model: 'core-i 5',
        ramGb: 4,
    },
    watch: {
        name: 'smart watch - 15',
        smart: false,
        device: {
            brandName: 'apple-2',
            model: 'ls-26',
            price: 24000,
        }
    },
    bike: {
        name: "4v",
        version: "ls- 26",
        engine: {
            brandName: 'Bazaz',
            model: "2016",
            price: 150000,
        }
    }

}


console.log('Me Developer', meDeveloper)
console.log('Jobaer Developer', JobaerDeveloper)