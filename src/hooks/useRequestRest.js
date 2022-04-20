import { useState, useEffect } from 'react';
import axios from 'axios';

export const REQUEST_STATUS = {
    LOADING: 'loading',
    SUCCESS: 'success',
    FAILURE: 'failure'
};

const restUrl = 'api/albums';

const useRequestRest = () => {
    const [data, setData] = useState([]);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState('');

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    useEffect(() => {
        const delayFn = async () => {
            try {
                const result = await axios.get(restUrl);
                // throw "Loading error.";
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(result.data);
            } catch (error) {
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(error);
            }
        };
        delayFn();
    }, []);

    const updateRecord = (record, doneCallback) => {
        const originalRecords = [...data];
        const newRecords = data.map(rec => (rec.id === record.id ? record : rec));

        const delayFn = async () => {
            try {
                setData(newRecords);
                await axios.put(`${restUrl}/${record.id}`, record);
                if (doneCallback) {
                    doneCallback();
                }
            } catch (error) {
                console.error('Error thrown from inside delayFn');
                if (doneCallback) {
                    doneCallback();
                }
                setData(originalRecords);
            }
        };
        delayFn();

    };

    const insertRecord = (record, doneCallback) => {
        const originalRecords = [...data];

        const delayFn = async () => {
            try {
                const results = await axios.post(`${restUrl}/99999`, record);
                const {data: insertRecord} = results;
                const newRecords = [insertRecord, ...data];
                setData(newRecords);
                if (doneCallback) {
                    doneCallback();
                }
            } catch (error) {
                console.error('Error thrown from inside delayFn');
                if (doneCallback) {
                    doneCallback();
                }
                setData(originalRecords);
            }
        };
        delayFn();

    };

    const deleteRecord = (record, doneCallback) => {
        const originalRecords = [...data];
        const newRecords = data.filter(rec => rec.id != record.id);

        const delayFn = async () => {
            try {
                setData(newRecords);
                await axios.delete(`${restUrl}/${record.id}`, record);
                if (doneCallback) {
                    doneCallback();
                }
            } catch (error) {
                console.error('Error thrown from inside delayFn');
                if (doneCallback) {
                    doneCallback();
                }
                setData(originalRecords);
            }
        };
        delayFn();

    };

    return {
        data,
        requestStatus,
        error,
        updateRecord,
        insertRecord,
        deleteRecord
    };
};

export default useRequestRest;
