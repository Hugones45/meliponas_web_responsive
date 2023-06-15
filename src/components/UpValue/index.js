import { Button } from "../button/Button"

export const UpValue = ({ cleanValue }) => {

    const value = ''

    return (
        <div >
            <Button functions={() => cleanValue(value)} text='Clean' />
        </div>
    )
}
