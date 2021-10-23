package com.dyno;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.bukkit.Bukkit;
import org.bukkit.entity.Damageable;
import org.bukkit.entity.Entity;
import org.bukkit.entity.Pig;
import org.bukkit.entity.Player;
import org.bukkit.entity.Zombie;
import org.bukkit.event.EventHandler;
import org.bukkit.event.Listener;
import org.bukkit.event.entity.EntityDamageByEntityEvent;

public class EventOne implements Listener {
    private MoneyPlugin plugin;
   
    @EventHandler
    public void killZombie(EntityDamageByEntityEvent ev) throws SQLException {
        Entity damager = ev.getDamager();
        Entity damagee = ev.getEntity();

        if (damager instanceof Player && damagee instanceof Zombie) {
            Damageable damageeDmg = (Damageable) damagee;
            Player player = (Player)damager;
            if (damageeDmg.getHealth() - ev.getDamage() < 0) {
                Connection conn = DB.getConn();
                Statement s = conn.createStatement();
                String req = "SELECT quest_one FROM users WHERE uuid='" + player.getUniqueId() + "'";
                ResultSet r = s.executeQuery(req);
                r.next();
                int quest_one = r.getInt(1);
                quest_one++;
                req = "UPDATE users SET quest_one ='" + quest_one + "' WHERE uuid='" + player.getUniqueId() + "'";
                s.executeUpdate(req);
                DB.closeConn();
            }
        }

    }
}
