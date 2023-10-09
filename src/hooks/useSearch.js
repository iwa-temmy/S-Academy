import { useEffect } from 'react';
import { useState } from 'react';

const useSearch = (data, keys, getExFields) => {
    const [filteredData, setFilteredData] = useState(data);
    const [keyword, setKeyword] = useState('');

    const handleSearch = (e) => {
        setKeyword(e.target.value);
    };
    const handleRemoveSearch = (e) => {
        setKeyword('');
    };
    const isMatch = (string) => {
        return string.toLowerCase().includes(keyword.toLowerCase());
    };
    const filterData = () => {
        const filteredData = data?.filter((item) => {
            const externalFields = getExFields ? getExFields(item) : {};
            const keyValues = keys?.map((key) => {
                let value = { ...item, ...externalFields };
                key.split('.').forEach((keyBit) => (value = value?.[keyBit]));
                return value;
            });
            const strValues = keyValues?.filter((value) => value).join(' ');
            return isMatch(strValues);
        });
        setFilteredData(filteredData);
    };

    useEffect(() => {
        if (keyword?.length) {
            filterData();
        } else {
            setFilteredData(data);
        }
    }, [keyword, data]);

    return { data: filteredData, handleSearch, handleRemoveSearch, keyword };
};

export default useSearch;
