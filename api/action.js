const status = {
    light1: false,
    light2: false,
    light3: false
};

export default async function handler(req, res) {
    const { light1, light2, light3 } = req.query;

    if (light1 !== undefined) {
        status.light1 = light1 === 'on';
    }
    if (light2 !== undefined) {
        status.light2 = light2 === 'on';
    }
    if (light3 !== undefined) {
        status.light3 = light3 === 'on';
    }

    res.json(status);
}
