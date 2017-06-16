/**
 * Created by Lxg on 2017/6/12.
 */

import common from './common';
import home from './home';
import data from './data';
import project from './project';
import talent from './talent';

let scripts = [];
scripts = scripts.concat(common);
scripts = scripts.concat(home);
scripts = scripts.concat(data);
scripts = scripts.concat(project);
scripts = scripts.concat(talent);

export default scripts;
