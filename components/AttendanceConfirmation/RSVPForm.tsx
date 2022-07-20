import React from 'react'
import Button from '../common/Button'

type Props = {
    onSubmit?: () => void
}

export default function RSVPForm({ onSubmit }: Props) {
    return (
        <div className='flex flex-col break-all'>
            <div className="form-control w-full gap-4">
                <div>
                    <label className="label">
                        <span className="label-text">Nama</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-primary input-sm w-full" />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Hadir?</span>
                    </label>
                    <select className="select select-primary select-sm">
                        <option>Hadir</option>
                        <option>Tidak Hadir</option>
                    </select>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Hadir Sejak?</span>
                    </label>
                    <select className="select select-primary select-sm">
                        <option>Akad Nikah</option>
                        <option>Resepsi</option>
                    </select>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Ucapan & Doa</span>
                    </label>
                    <textarea className="textarea textarea-primary textarea-sm w-full" />
                </div>
                <div>
                    <Button text='Kirim' small />
                </div>
            </div>
        </div>
    )
}