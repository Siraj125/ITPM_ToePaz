import * as yup from 'yup'

export const calcSchema = yup.object().shape({
    fresname: yup.string().required().min(5),
    fsurfarea: yup.number().required(),
    fmethaneprod: yup.number()
});