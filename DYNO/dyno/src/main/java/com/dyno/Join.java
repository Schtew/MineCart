package com.dyno;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.bukkit.Bukkit;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.player.AsyncPlayerPreLoginEvent;

public class Join implements Listener {
    private MoneyPlugin plugin;
   
    @EventHandler
    public void onPlayerJoin(AsyncPlayerPreLoginEvent ev) throws SQLException {
        Connection conn = DB.getConn();
        Statement s = conn.createStatement();
        String req = "SELECT COUNT(*) FROM users WHERE uuid='" + ev.getUniqueId() + "'";
        ResultSet r = s.executeQuery(req);
        r.next();
        if (r.getInt(1) == 0) {
            System.out.println("User not found");
            int currency = 0;
            String insertQuery = "INSERT INTO users VALUES('" + ev.getUniqueId() + "', '" + ev.getName() + "', " + currency + "," + 0 + ")";
            s.execute(insertQuery);
        } else {
            System.out.println("User found");
        }
        s.close();
        DB.closeConn();
    }
}
