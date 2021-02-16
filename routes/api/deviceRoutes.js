const DeviceInfo = require('../../models/DeviceInfo');

module.exports = (app) => {

    app.get('/api/deviceprofiles', async (req,res) => {
        console.log("Asdadas");
        try{
            const deviceProfile = await DeviceInfo.find();
            res.json(deviceProfile);
        }catch(err){
            res.send(500).send("wabalabadubdub");
        }
       
    });

    //@access private
    app.get('/api/deviceprofiles/:status', async (req, res) => {
        try {
            const deviceprofiles = await DeviceInfo.find({ status: req.params.status });

            if (!deviceprofiles) {
                return res.status(400).json({ msg: 'Device Profile with that status not found' });
            }

            res.json(deviceprofiles);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }
    });

    app.get('/api/deviceprofiles/:device_id', async (req, res) => {
        try {
            const deviceprofile = await DeviceInfo.findOne({ device_id: req.params.device_id });
    
            if (!deviceprofile) {
                return res.status(400).json({ msg: 'Device id not found.' });
            }
    
            res.json(deviceprofile);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }
    });
    app.get('/api/deviceprofiles/:institution_id', async (req, res) => {
        try {
            const deviceprofiles = await DeviceInfo.find({ institution_id: req.params.institution_id });
    
            if (!deviceprofiles) {
                return res.status(400).json({ msg: 'Institution id not found.' });
            }
            res.json(deviceprofiles);
        } catch (err) {
            console.log(err.message);
            res.status(500).send('Server Error');
        }
    });
}