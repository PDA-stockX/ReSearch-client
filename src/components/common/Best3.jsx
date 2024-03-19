import React from 'react';
import Best from '~/components/common/Best';

export default function Best3({ data }) {
    return (
        <>
            <div className='best3'>
                <Best name={data[0][0]} company={data[0][1]} returnRate={data[0][2]} />
                <Best name={data[1][0]} company={data[1][1]} returnRate={data[1][2]} />
                <Best name={data[2][0]} company={data[2][1]} returnRate={data[2][2]} />
            </div>
        </>
    )
}