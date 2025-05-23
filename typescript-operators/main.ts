/* eslint-disable no-unused-vars */

interface Customer {
  name: string;
  details?: {
    address?: {
      city: string;
      street: string;
      zip: string;
    };
    age?: number;
  };
}

const v1 = { value: 'Something' };
const v2 = '';
const v3 = undefined;
const v4 = [3, 5, 7, 9];
const v5: Customer = {
  name: 'Carl',
  details: {
    age: 82,
  },
};

v1 && console.log('v1 is truthy');

v2 && console.log('v2 is truthy');

const config1 = v1 || 'default-value';
console.log('config1: ', config1);
const config2 = v2 || 'default-value';
console.log('config2: ', config2);

const cfg1: string | any = v1 ?? 'default-value';
console.log(`cfg1: `, cfg1);
const cfg2: string | any = v2 ?? 'default-value';
console.log(`cfg2: `, cfg2);
const cfg3: string | any = v3 ?? 'default-value';
console.log(`cfg3: `, cfg3);

const tern1: string = v1 ? 'truthy' : 'falsy';
console.log('tern1: ', tern1);
const tern2: string = v2 ? 'truthy' : 'falsy';
console.log('tern2: ', tern2);

const oc1: any = v1?.value;
console.log('oc1: ', oc1);
const oc2: any = v5?.details?.address?.city;
console.log('oc2: ', oc2);

const sObj: any = { ...v1, foo: 'bar' };
console.log('sObj: ', sObj);

const sArr: number[] = [100, ...v4];
console.log('sArr: ', sArr);
