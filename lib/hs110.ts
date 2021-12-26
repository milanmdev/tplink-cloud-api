/**
 * @package     tplink-cloud-api
 * @author      Alexandre Dumont <adumont@gmail.com>
 * @copyright   (C) 2017 - Alexandre Dumont
 * @license     https://www.gnu.org/licenses/gpl-3.0.txt
 * @link        http://itnerd.space
 */

/* This file is part of tplink-cloud-api.

tplink-cloud-api is free software: you can redistribute it and/or modify it
under the terms of the GNU General Public License as published by the Free
Software Foundation, either version 3 of the License, or (at your option) any
later version.

tplink-cloud-api is distributed in the hope that it will be useful, but WITHOUT
ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with
tplink-cloud-api. If not, see http://www.gnu.org/licenses/. */

import hs100 from "./hs100";

export default class HS110 extends hs100 {
  constructor(tpLink, deviceInfo) {
    super(tpLink, deviceInfo);
  }

  async getPowerUsage() {
    const r = await super.passthroughRequest({
      emeter: { get_realtime: null }
    });
    return r.emeter.get_realtime;
  }

  async getDayStats(year, month) {
    const r = await super.passthroughRequest({
      emeter: { get_daystat: { year, month } }
    });
    return r.emeter.get_daystat.day_list;
  }

  async getMonthStats(year) {
    const r = await super.passthroughRequest({
      emeter: { get_monthstat: { year } }
    });
    return r.emeter.get_monthstat.month_list;
  }
}
